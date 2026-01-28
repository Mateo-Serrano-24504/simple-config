# Simple configuration for TypeScript development

> This package is intended to be installed as a development dependency.
> To know what dependencies this package will install, refer to the
> [overview](#overview).

## Overview

This package includes some simple configuration files for TypeScript
development. When installed, this package will include a script that:

- Installs a set of **development dependencies**. See more in the
  [development dependencies](#development-dependencies) section.
- Creates template configuration files for:
  - TypeScript
  - ESLint (Flat Config)
  - Prettier
  - lint-staged

See more in the [configuration files](#configuration-files) section.

- Initializes **Husky** and registers a working `pre-commit` hook that
  runs lint-staged.

## Installation

After installing this package, you must run the following script to install
the dependencies and set up Husky.

Run the following commands in your project's root directory:

```bash
npm i @mateoserrano/simple-config --save-dev
npx dev-config
```

### Development dependencies

After having run the script, the following dependencies will have been installed:

- `typescript`
- `eslint`
- `typescript-eslint`
- `@eslint/js`
- `prettier`
- `eslint-config-prettier`
- `lint-staged`
- `husky`
- `globals`

## Configuration files

After having run the script, the following configuration files will have been
created:

- `eslint.config.js`
- `prettier.config.js`
- `lint-staged.config.js`
- `tsconfig.json`

As they are templates, you might modify any of these to suit your needs, although
they should be enough to get you started.

Note that the `tsconfig.json` file sets the standard to ES2020 and the module type
to ESM.

## 📄 License

MIT
