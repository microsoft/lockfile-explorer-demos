# lockfile-explorer-demos

<div>
  <br />
  <a href="https://lfx.rushstack.io/">
    <img width="200" alt="Rush Lockfile Explorer" src="https://rushstack.io/images/lockfile-explorer.svg">
  </a>
  <p />
</div>

This branch is part of a tutorial series from the **Lockfile Explorer** [documentation](https://lfx.rushstack.io/).

👉 To report problems with this content, [create a GitHub issue](https://github.com/microsoft/rushstack-websites/issues) in the main [microsoft/rushstack-websites](https://github.com/microsoft/rushstack-websites/issues) monorepo.

## Preparing the Verdaccio environment

If you want to use `rush install` or `rush update` in the demo branches, the [Verdaccio](https://verdaccio.org/)
NPM registry service needs to be running on localhost.

1. Clone the `main` branch of this repo
2. `pnpm install`
3. `pnpm start` to launch Verdaccio
4. In a separate shell window: `pnpm publish-all` to publish all of the [demo NPM packages](./demo-packages/) to localhost.

## Demo branches

- [demo/doppel-1](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-1)
- [demo/doppel-2](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-2)
- [demo/doppel-3](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-3)
- [demo/peer-1](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-1)
- [demo/peer-2](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-2)
- [demo/peer-3](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-3)
- [demo/peer-4](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-4)
- [demo/peer-5](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-5)
- [demo/sample-1](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sample-1)
- [demo/sbs-1](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sbs-1)
- [demo/sbs-2](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sbs-2)
- [demo/sbs-3](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sbs-3)

The base branch that is used to sync template content across the branches:

- [demo/\_base](https://github.com/microsoft/lockfile-explorer-demos/tree/demo/_base)

## Contributor Notice

This repo welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This repo has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
