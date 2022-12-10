# lockfile-explorer-demos

<div>
  <br />
  <a href="https://lfx.rushstack.io/">
    <img width="200" alt="Rush Lockfile Explorer" src="https://lfx.rushstack.io/images/site/lockfile-explorer.svg">
  </a>
  <p />
</div>


This branch is part of a tutorial series from the **Lockfile Explorer** [documentation](https://lfx.rushstack.io/).

👉 To report problems with this content, [create a GitHub issue](https://github.com/microsoft/rushstack-websites/issues) in the main [microsoft/rushstack-websites](https://github.com/microsoft/rushstack-websites/issues) monorepo.

## This branch: demo/sbs-2

<div>
  <img alt="dependency graph for this branch" src="./common/images/lfx-demo-sbs-2.svg">
</div>


## Installing the monorepo

This is a [Rush](https://rushjs.io) monorepo that uses the [PNPM](https://pnpm.io/) package manager.

1. Install the Rush tool: `pnpm install --global @microsoft/rush` or `npm install --global @microsoft/rush`
2. Start the [Verdaccio](https://verdaccio.org/) localhost registry. (In a separate shell window, clone the `main` branch of this repo in a separate folder, then run `pnpm install && pnpm start` in that folder.)
3. Install the monorepo dependencies by running `rush install` in this folder


## Contributor Notice

This repo welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This repo has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

