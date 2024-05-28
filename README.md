# Fictionlab documentation

Fictionlab documentation is built using [Docusaurus 3](https://docusaurus.io/),
a modern static website generator.

## Links

- [Production link](http://docs.fictionlab.pl)
- [development (local) link](http://localhost:3000)

## How to start developing

### Installation on local machine

#### Prerequisites

To launch development environment, it is necessary to install following
prerequisites:

- Code editor ([Visual Studio Code](https://code.visualstudio.com/) is
  recommended)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/)
- [Git](https://git-scm.com/)
- web browser

#### Recommended VS Code extensions

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Cloning repository

To clone repository, type in terminal:

```
git clone https://github.com/fictionlab/docs
```

or use VS Code search bar:

```
> git clone
```

in URL paste url of this repository.

By default, `development` branch is selected. To create new branch see
[Branching section](#branching).

#### Launching development environment

After successful clone, open folder in VS Code and in terminal type:

```
yarn install
```

After successful installation, start development environment by typing:

```
yarn start
```

After few seconds, new browser tab should appear, pointing to
http://localhost:3000.

From now on (until you close the terminal) changes in files will be reflected in
the development environment.

## Making updates to documentation

In order to update documentation clone this repository and create dedicated
branch from development (or any branch). For example this command will create
new branch called `feature/new-button` from `development`:

```
git checkout -b feature/new-button development
```

On newly created branch, modify necessary files and test everything using
development environment. We prepared special section of the documentation to
show how to consistently style and format pages:

> TBD

After making any changes, it is necessary to test how compiled code is shown in
the browser. To do that, use development environment, that was shown in the
previous section.

<!-- prettier-ignore -->
> [!IMPORTANT]
> It is required to test results of edits on both desktop and mobile browsers!
> 
> To test mobile layout on PC, use dev development tools included in most popular browsers.
>
> To open them in any chromium based browser (Chrome, MS Edge, Opera etc.) press **F12**. Then click **Toggle device emulation** button in top left corner.

As last step, it is required to check spelling and formatting of the code.

To check format of the code, type:

```
yarn formatcheck
```

It will only check formatting without making any changes to files. It will show
a list of files that require formatting changes. You can use that to fix
formatting manually.

As alternative it is possible to fix formatting automatically by typing:

```
yarn format
```

<!-- prettier-ignore -->
> [!DANGER]
> Prettier don't have full MDXv3 support and there is some problems with it. See: [docusaurus.io - usage with prettier](https://docusaurus.io/docs/markdown-features/admonitions#usage-with-prettier)

To check spelling inside all MDX files, type:

```
yarn spellcheck
```

It will show a list of unrecognized words inside all markdown files. You have to
fix them manually.

### Pushing changes to remote repo

When ready, push all modified files to remote branch using `git push` command.

<!-- prettier-ignore -->
> [!TIP]
> For more information on using git, see https://www.atlassian.com/git

After all the changes have been made, create Pull request to merge your changes
into `development` branch.

Code must be reviewed by Fictionlab staff. By default users requested for review
are:

- @krzemien97
- @bjsowa

<!-- prettier-ignore -->
> [!WARNING]
> Pull requests to `production` branch from branches other than
> `development` won't be merged.

### Branching naming

Right now we have following branching naming convention:

- /feature/description - for changes to wiki code like new React components
- /content/description - for updating content of the wiki
- /fix/description - for making fixes

## Reporting issues with documentation

If you spot any problem with documentation, you can create
[issue](https://github.com/fictionlab/docs/issues) on this repository.

In addition, you can e-mail us at contact@fictionlab.pl.
