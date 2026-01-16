import {
  addHuskyPrepareCommand,
  prepareHuskyCommand,
  setUpHuskyCommand,
  devDeps,
  devDepFiles,
  CommandInstallFactory
} from './core';
import {
  copyFilesToTargetOrSkip,
  getTemplatesFolder,
  verifyNodePackage,
} from './core/index.js'

export const assertValidNodePackage = () => {
  if (!verifyNodePackage()) {
    console.error('Error: package.json not found.')
    process.exit(1)
  }
}
export const installDependencies = () => {
  console.log('Installing dependencies...')
  const commandInstallFactory = new CommandInstallFactory();
  addHuskyPrepareCommand.run();
  prepareHuskyCommand.run();
  commandInstallFactory.create(devDeps).run();
}
export const configureHusky = () => {
  console.log('Configuring Husky...');
  setUpHuskyCommand.run();
}
export const copyConfigurationFiles = () => {
  console.log('Copying configuration files...')
  const templatesDirectory = getTemplatesFolder('templates')
  copyFilesToTargetOrSkip(devDepFiles, templatesDirectory)
}
