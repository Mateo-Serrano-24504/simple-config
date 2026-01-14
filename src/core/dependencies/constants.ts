import { Dependency } from './dependency'

const devDeps: Dependency[] = [
  {
    name: 'tsx',
    version: '4.20.6',
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
  }
];
export const devDepFiles = {
  eslint: [
    {
      source: 'eslint.config.js',
      target: '.',
    },
  ],
  prettier: [
    {
      source: 'prettier.config.js',
      target: '.',
    },
  ],
  lintStaged: [
    {
      source: 'lint-staged.config.js',
      target: '.',
    },
  ],
  typescript: [
    {
      source: 'tsconfig.json',
      target: '.',
    },
  ],
}
