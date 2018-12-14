# Contributing

If you're reading this, thank you for helping improve this package! Here are a few guidelines that will help you along the way.

## Submitting a pull request

Please keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

When adding new features or modifying existing, please attempt to include tests to confirm the new behaviour. You can read more about our test setup [below](#test).

### Branch Structure

At any given time, `master` represents the latest production version of the library.

### How to increase the chance of being accepted?

We will only accept a pull request for which all tests pass. Make sure the following is true:

- The branch is not behind master.
- If a feature is being added:
  - If the result was already achievable with the core library, explain why this
    feature needs to be added to the core.
  - It includes relevant tests.
  - If this is a common use case, considered adding an example to the documentation.
- If a bug is being fixed, test cases that fail without the fix are included.
- The code is formatted and linted.
- The PR title follows the pattern `Imperative commit message`. (See: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/#imperative) for a great explanation)

## Getting started

Please create a new branch from an up to date master on your fork.

1. Fork this repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/[package-name].git`
3. Create a branch `git checkout -b my-topic-branch`
4. Install dependencies
5. Make your changes, build, test, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
6. Visit GitHub and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.

```sh
git remote add upstream git@github.com:<yourname>/[package-name].git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
```

### Working locally

#### Install Dependencies

```sh
npm i
```

### Test

```sh
npm run test
npm build
```

### How do I use my local distribution of this package in any project?

Sometimes it is good to test your changes in a real world scenario, in order to do that you can install your local distribution of this package in any project with [npm link](https://docs.npmjs.com/cli/link.html).

First, you have to build your local distribution of this package:

```sh
# From the root folder of the project
npm run build
```

**Note:** You can run the task `npm run build:watch` instead of `npm run build` if you want the process to continue running as you modify the codebase.

Then, you create a link to your local distribution:

```shell
# From the root folder of the project
npm link
```

Next, you link your local distribution of this package to any project you want to try your changes:

```shell
# From the root folder of any project
npm link <package-name>
```

Now, every time you import `package-name` in your project, it is going to use your local distribution.

### Coding style

Please follow the coding style of the project. This package uses eslint and prettier, so if possible, enable linting in your editor to get real-time feedback.

## Roadmap

To get a sense of where this package is heading, or for ideas on where you could contribute, take a look at the [ROADMAP](ROADMAP.md).

## License

By contributing your code to this GitHub repository, you agree to license your contribution under the MIT license.
