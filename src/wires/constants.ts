import type { Dependency } from '../core/index.js';

export const devDeps: Dependency[] = [
  {
    name: 'typescript',
    version: '5.9.3',
  },
  {
    name: 'eslint',
    version: '9.39.1',
  },
  {
    name: 'typescript-eslint',
    version: '8.46.4',
  },
  {
    name: '@eslint/js',
    version: '9.39.1',
  },
  {
    name: 'prettier',
    version: '3.6.2',
  },
  {
    name: 'eslint-config-prettier',
    version: '10.1.8',
  },
  {
    name: 'lint-staged',
    version: '16.2.7',
  },
  {
    name: 'husky',
    version: '9.1.7',
  },
  {
    name: 'globals',
    version: '17.0.0',
  },
];
export const devDepFiles = [
  {
    sourceName: 'template.eslint.config.js',
    targetName: 'eslint.config.js',
  },
  {
    sourceName: 'template.prettier.config.js',
    targetName: 'prettier.config.js',
  },
  {
    sourceName: 'template.lint-staged.config.js',
    targetName: 'lint-staged.config.js',
  },
  {
    sourceName: 'template.tsconfig.json',
    targetName: 'tsconfig.json',
  },
  {
    sourceName: 'template.tsconfig.build.json',
    targetName: 'tsconfig.build.json',
  },
];

export const initHusky = 'npx husky init';
export const prepareHusky = 'npm run prepare';
export const setUpHusky = 'echo "npx lint-staged" > .husky/pre-commit';
