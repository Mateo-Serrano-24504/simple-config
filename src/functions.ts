import {
  addHuskyPrepareCommand,
  prepareHuskyCommand,
  setUpHuskyCommand,
  devDeps,
  devDepFiles,
} from './core';
import {
  logger,
  fileCopier,
  commandInstallFactory,
  packageManager,
  cwd,
  pathManager,
} from './instances'

export const assertValidNodePackage = () => {
  if (!packageManager.verifyValidPackage(cwd)) {
    logger.error('Error: package.json not found.')
    process.exit(1)
  }
}
export const installDependencies = () => {
  logger.log('Installing dependencies...')
  addHuskyPrepareCommand.run();
  prepareHuskyCommand.run();
  commandInstallFactory.create(devDeps).run();
}
export const configureHusky = () => {
  logger.log('Configuring Husky...');
  setUpHuskyCommand.run();
}
export const copyConfigurationFiles = () => {
  logger.log('Copying configuration files...');
  const templatesDirectory = packageManager.getTemplatesFolderPath();
  devDepFiles.forEach(file => {
    logger.log(`Copying file ${file}...`)
    fileCopier.copyFileToFolderOrSkip(
      file.source,
      pathManager.changeDirectory(templatesDirectory, file.target)
    );
  });
}
