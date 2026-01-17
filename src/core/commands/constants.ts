import { CommandSilentFactory } from './command.silent.factory'

const commandSilentFactory = new CommandSilentFactory()
const initHusky = 'npx husky init'
const prepareHusky = 'npm run prepare'
const setUpHusky = 'echo "npx lint-staged" > .husky/pre-commit'

export const initHuskyCommand = commandSilentFactory.create(initHusky)
export const prepareHuskyCommand = commandSilentFactory.create(prepareHusky)
export const setUpHuskyCommand = commandSilentFactory.create(setUpHusky)
