export const devDeps = {
  tsx: {
    package: 'tsx',
    version: '4.20.6',
  },
  eslint: {
    package: 'eslint',
    version: '9.39.1',
  },
  typescriptEslint: {
    package: 'typescript-eslint',
    version: '8.46.4',
  },
  eslintJs: {
    package: '@eslint/js',
    version: '9.39.1',
  },
  prettier: {
    package: 'prettier',
    version: '3.6.2',
  },
  eslintConfigPrettier: {
    package: 'eslint-config-prettier',
    version: '10.1.8',
  },
  lintStaged: {
    package: 'lint-staged',
    version: '16.2.7',
  },
  husky: {
    package: 'husky',
    version: '9.1.7',
  },
  globals: {
    package: 'globals',
    version: '17.0.0',
  }
}
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
export const addHuskyPrepare = 'npm pkg set scripts.prepare="husky init"'
export const installCmd = (installNames) => `npm install -D ${installNames.join(' ')} --save-exact`
export const prepareHuskyCommand = 'npm run prepare'
export const setupHuskyCommand = 'npx husky add .husky/pre-commit "npx lint-staged"'
