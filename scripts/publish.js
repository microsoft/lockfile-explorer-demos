const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

// DO NOT STORE PASSWORDS IN SOURCE CODE
// This password is saved here because Verdaccio runs on localhost
// and is used for testing purposes only, so there is no security concern.
const NPM_TOKEN = `//localhost:54321/:_authToken="BUocaxb4NA8iQuWjGBZHcw=="`;

const REGISTRY_PARAMETER = `--registry=http://localhost:54321`;

const repoRootPath = path.resolve(__dirname, '..');
const demoFolderPath = path.join(repoRootPath, 'demo-packages');

const folderNames = fs.readdirSync(demoFolderPath);

for (folderName of folderNames) {
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
      .execSync(`pnpm view ${packageJson.name} time ${REGISTRY_PARAMETER} --json`, {
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
    child_process.execSync(`pnpm publish --no-git-checks --${NPM_TOKEN}`, {
      stdio: 'inherit',
      cwd: fullPath
    });
  }
}
