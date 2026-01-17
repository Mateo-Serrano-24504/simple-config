import {
  Logger,
  PathManager,
  FileHandler,
  FileCopier,
  CommandInstallFactory,
  CommandSilentFactory,
  PackageManager,
} from '../core/index.js'
import { initHusky, prepareHusky, setUpHusky } from './constants.js'

const commandSilentFactory = new CommandSilentFactory()
export const logger = new Logger()
export const pathManager = new PathManager()
export const fileHandler = new FileHandler()
export const fileCopier = new FileCopier(fileHandler, logger)
export const commandInstallFactory = new CommandInstallFactory()
export const packageManager = new PackageManager(fileHandler, pathManager)
export const cwd = process.cwd()

export const initHuskyCommand = commandSilentFactory.create(initHusky)
export const prepareHuskyCommand = commandSilentFactory.create(prepareHusky)
export const setUpHuskyCommand = commandSilentFactory.create(setUpHusky)
