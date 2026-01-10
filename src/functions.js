import {
  copyFilesToTargetOrSkip,
  getInstallNames,
  getTemplatesFolder,
  runCommand,
  runCommandSilent,
  verifyNodePackage
} from "./core";
import { devDepFiles, devDeps, installCmd, installHuskyCommand, setupHuskyCommand } from "./constants.js";

const runInstallCommand = (installNames) => runCommandSilent(installCmd(installNames));
const runHuskyCommand = () => {
  runCommand(installHuskyCommand);
  runCommand(setupHuskyCommand);
}
const getInstallationArguments = () => getInstallNames(devDeps);

export const assertValidNodePackage = () => {
  if (!verifyNodePackage()) {
    console.error('Error: package.json not found.');
    process.exit(1);
  }
}
export const installDependencies = () => {
  console.log('Installing dependencies...');
  runInstallCommand(getInstallationArguments());
}
export const configureHusky = () => {
  console.log('Configuring Husky...');
  runHuskyCommand();
}
export const copyConfigurationFiles = () => {
  console.log('Copying configuration files...');
  const templatesDirectory = getTemplatesFolder('../templates');
  copyFilesToTargetOrSkip(devDepFiles, templatesDirectory);
}
