import { CommandSilentFactory } from './command.silent.factory'

const commandSilentFactory = new CommandSilentFactory();
const addHuskyPrepare = 'npm pkg set scripts.prepare="husky init"';
const prepareHusky = 'npm run prepare';
const setUpHusky = 'echo "npx lint-staged" > .husky/pre-commit';

export const addHuskyPrepareCommand = commandSilentFactory.create(addHuskyPrepare);
export const prepareHuskyCommand = commandSilentFactory.create(prepareHusky);
export const setUpHuskyCommand = commandSilentFactory.create(setUpHusky);
