import { SilentCommand } from './commands/silentCommand'
import { InstallCommandFactory } from './commands/installCommandFactory'
import { Dependency } from './dependencies/dependency'

const addHuskyPrepare = 'npm pkg set scripts.prepare="husky init"';
const prepareHusky = 'npm run prepare';
const setUpHusky = 'echo "npx lint-staged" > .husky/pre-commit';
const installCommandFactory = new InstallCommandFactory();

export const huskyPrepareCommand = new SilentCommand(addHuskyPrepare);
export const prepareHuskyCommand = new SilentCommand(prepareHusky);
export const setUpHuskyCommand = new SilentCommand(setUpHusky);
export const installDependenciesCommandFactory = {
  create: (deps: Dependency[]) => new SilentCommand(installCommandFactory.create(deps))
};

