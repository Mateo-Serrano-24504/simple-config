import {
  Logger,
  PathManager,
  FileHandler,
  FileCopier,
  CommandInstallFactory,
  PackageManager,
} from './core'

export const logger = new Logger()
export const pathManager = new PathManager()
export const fileHandler = new FileHandler()
export const fileCopier = new FileCopier(fileHandler, logger)
export const commandInstallFactory = new CommandInstallFactory()
export const packageManager = new PackageManager(fileHandler, pathManager)
export const cwd = process.cwd()
