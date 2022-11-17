'use strict';

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const NpmRegistryClient = require('npm-registry-client');

// DO NOT STORE PASSWORDS IN SOURCE CODE
// This password is saved here because Verdaccio runs on localhost
// and is used for testing purposes only, so there is no security concern.
const username = 'test-only';
const password = 'password';
const email = 'test-only@example.com';

const verdaccioUrl = 'http://localhost:54321';
const verdaccioShortUrl = '//localhost:54321';

function publishPackages(npmAccessToken) {
  const registryCliParameter = `--registry=${verdaccioUrl}`;
  const authCliParameter = `--${verdaccioShortUrl}/:_authToken="${npmAccessToken}"`

  const repoRootPath = path.resolve(__dirname, '..');
  const demoFolderPath = path.join(repoRootPath, 'demo-packages');

  const folderNames = fs.readdirSync(demoFolderPath);

  for (const folderName of folderNames) {
    if (folderName.indexOf('@') < 0) {
      continue;
    }

    const fullPath = path.join(demoFolderPath, folderName);

    console.log(`\n*** Processing ${fullPath}`);

    const packageJson = require(path.join(fullPath, 'package.json'));

    console.log(`*** Checking ${packageJson.name}@${packageJson.version}`);

    let outputObject = {};
    try {
      const outputJson = child_process
        .execSync(`pnpm view ${packageJson.name} time ${registryCliParameter} --json`, {
          stdio: ['ignore', 'pipe', 'ignore'],
          cwd: fullPath
        })
        .toString();
      outputObject = JSON.parse(outputJson);
    } catch (e) {
      console.log('Package has not been published yet.');
    }

    if (outputObject[packageJson.version]) {
      console.log(`${packageJson.name}@${packageJson.version} is already published.`);
    } else {
      console.log(`*** ${packageJson.name}@${packageJson.version} publishing...`);
      child_process.execSync(`pnpm publish --no-git-checks ${authCliParameter}`, {
        stdio: 'inherit',
        cwd: fullPath
      });
    }
  }
}

const adduserParams = {
  auth: {
    username,
    password,
    email
  },
  timeout: 10000
};

const client = new NpmRegistryClient();

client.adduser(verdaccioUrl, adduserParams, function (error, data, raw, res) {
  if (error) {
    console.error('NPM login failed:');
    console.error(error);
    return;
  }
  console.log(`NPM login succeeded`);
  const npmAccessToken = data.token;

  publishPackages(npmAccessToken);
});
