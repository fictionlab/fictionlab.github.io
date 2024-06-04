# Fictionlab documentation

Welcome to the Fictionlab documentation repository. This documentation is built
using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Links

- [Production link](http://docs.fictionlab.pl)
- [development (local) link](http://localhost:3000)

## Getting Started

### Prerequisites

Ensure the following tools are installed on your local machine:

- Code editor ([Visual Studio Code](https://code.visualstudio.com/) is
  recommended)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/)
- [Git](https://git-scm.com/)
- A web browser

#### Recommended VS Code extensions

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Cloning repository

To clone the repository, execute the following command in your terminal:

```sh
git clone https://github.com/fictionlab/docs
```

Alternatively, use the VS Code command palette:

```
> git clone
```

and paste the repository URL.

By default, `development` branch is selected. To create new branch see
[Branching section](#branching).

### Launching development environment

After cloning the repository, open the folder in VS Code and run:

```
yarn install
```

To start the development environment, use:

```
yarn start
```

A new browser tab will open at http://localhost:3000, reflecting any changes
made to the files.

## Updating the Documentation

To update the documentation, clone this repository and create a new branch from
`development` (or any other branch). For example, to create a branch named
`feature/new-button` from `development`:

```
git checkout -b feature/new-button development
```

Make necessary modifications and test everything using the development
environment. For guidelines on styling and formatting, refer to our
Documentation style guide. - Work In Progress

<!-- prettier-ignore -->
> [!TIP]
> For more information on Docusaurus, visit [docusaurus.io](https://docusaurus.io/docs).

After making changes, test the compiled code in the browser.

<!-- prettier-ignore -->
> [!IMPORTANT]
> Always test your edits on both desktop and mobile browsers.
>
>Use developer tools to simulate mobile views (press F12 and select Toggle device emulation in Chrome-based browsers).

Finally, check the spelling and formatting:

```
yarn formatcheck
```

This will list files requiring formatting changes, which you can fix manually.
To fix formatting automatically, use:

```
yarn format
```

<!-- prettier-ignore -->
> [!CAUTION]
> Prettier has limited support for MDXv3. For more details, see [docusaurus.io - usage with prettier](https://docusaurus.io/docs/markdown-features/admonitions#usage-with-prettier)

To check spelling, run:

```
yarn spellcheck
```

This will list unrecognized words in markdown files, which you must correct
manually.

### Pushing Changes to the Remote Repository

When ready, push your changes using:

```
git push
```

<!-- prettier-ignore -->
> [!TIP]
> For more information on using Git, see [Atlassian Git Tutorial](https://www.atlassian.com/git).

After pushing changes, create a Pull Request to merge them into the
`development` branch. Your code will be reviewed by the Fictionlab team. Default
reviewers are:

- [@Krzemien97](https://github.com/Krzemien97)
- [@bjsowa](https://github.com/bjsowa)

<!-- prettier-ignore -->
> [!WARNING]
> Pull requests to the `production` branch from any branch other than `development` will not be merged.

### Branch Naming Conventions

Follow these naming conventions for branches:

- /feature/description - for new features, components etc.
- /content/description - for markdown content updates
- /fix/description - for fixes

## Reporting Issues

To report documentation issues, create an
[issue](https://github.com/fictionlab/docs/issues) on this repository or email
us at contact@fictionlab.pl.
