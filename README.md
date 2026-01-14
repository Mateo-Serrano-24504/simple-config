# Simple configuration for TypeScript development

> This package is intended to be used as a development dependency.
> No development dependency used to develop this package is necessarily
> installed.

## Overview

This package provides a quite simple configuration for common tools in
TypeScript development. It will install the following dependencies to
your project:

1. TypeScript (tsx)
2. ESLint
3. Prettier
4. lint-staged
5. Husky

And will configure husky to run only lint-staged when pre-committing.

## Installation

The following commands will install the package and configure it for your
project.

```bash
npm i -D @mateoserrano/simple-config
npx dev-config
```
