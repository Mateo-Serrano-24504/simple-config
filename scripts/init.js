#!/usr/bin/env node

import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url';

// Dependencies
const devDeps = {
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
};
const devDepFiles = {
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
};

function copyFileToFolderOrSkip(sourceFile, targetFolder) {
  const sourceFileName = basename(sourceFile);
  if (!existsSync(sourceFile)) {
    console.error(`Source file not found: ${sourceFile}`);
    return;
  }

  if (existsSync(join(targetFolder, sourceFileName))) {
    console.log(`File ${sourceFileName} already exists in ${targetFolder}. Skipping...`);
    return;
  }
  if (!existsSync(targetFolder)) {
    console.log(`Creating folder ${targetFolder}...`);
    mkdirSync(targetFolder, { recursive: true });
  }

  const destinationPath = join(targetFolder, sourceFileName);
  cpSync(sourceFile, destinationPath);
}

let installNames = [];
for (const dep of Object.values(devDeps)) {
  installNames.push(`${dep.package}@${dep.version}`);
}

const installCmd = `npm install -D ${installNames.join(' ')}`;
const installHuskyCmd =  'npx husky install';
const setupHuskyCmd = 'npx husky add .husky/pre-commit "npx lint-staged"';

const runSilent = cmd => execSync(cmd, { stdio: 'ignore' });
const cwd = process.cwd();

if (!existsSync(join(cwd, 'package.json'))) {
  console.error('No package.json found.');
  process.exit(1);
}

const repositoryDirname = fileURLToPath(new URL('.', import.meta.url));
const templatesFolder = join(repositoryDirname, '../templates');

// Install dependencies
console.log('Installing dependencies...');
runSilent(installCmd);

// Husky
console.log('Configuring Husky...');
runSilent(installHuskyCmd);
runSilent(setupHuskyCmd);

// Copy files
for (const fileGroup of Object.values(devDepFiles)) {
  for (const file of fileGroup) {
    const source = join(templatesFolder, file.source);
    const targetFolder = join(cwd, file.target);
    copyFileToFolderOrSkip(source, targetFolder);
  }
}

console.log('\nDependencies installed successfully.');
