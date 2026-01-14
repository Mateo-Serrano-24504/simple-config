import {
  copyFilesToTargetOrSkip,
  getInstallNames,
  getTemplatesFolder,
  runCommandSilent,
  verifyNodePackage,
} from './core/index.js'
import {
  addHuskyPrepare, authorizeHuskyCommand,
  devDepFiles,
  devDeps,
  installCmd,
  setupHuskyCommand,
} from './constants.js'

const runAddPrepareCommand = () => runCommandSilent(addHuskyPrepare)
const runInstallCommand = (installNames) => runCommandSilent(installCmd(installNames))
const runHuskyCommand = () => {
  runCommandSilent(setupHuskyCommand)
  runCommandSilent(authorizeHuskyCommand)
}
const getInstallationArguments = () => getInstallNames(devDeps)

export const assertValidNodePackage = () => {
  if (!verifyNodePackage()) {
    console.error('Error: package.json not found.')
    process.exit(1)
  }
}
export const installDependencies = () => {
  console.log('Installing dependencies...')
  runAddPrepareCommand()
  runInstallCommand(getInstallationArguments())
}
export const configureHusky = () => {
  console.log('Configuring Husky...')
  runHuskyCommand()
}
export const copyConfigurationFiles = () => {
  console.log('Copying configuration files...')
  const templatesDirectory = getTemplatesFolder('templates')
  copyFilesToTargetOrSkip(devDepFiles, templatesDirectory)
}
