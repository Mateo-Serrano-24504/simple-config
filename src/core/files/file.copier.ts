import type { Logger } from '../utils/index.js';

import type { FileHandler } from './file.handler.js';
import { PathManager } from './path.manager.js';

export class FileCopier {
  private pathManager = new PathManager();
  constructor(
    private fileHandler: FileHandler,
    private logger: Logger,
  ) {}
  private createFolderIfNotExist(folder: string) {
    if (!this.fileHandler.verifyIfFileExists(folder)) {
      this.logger.log(`Creating folder ${folder}...`);
      this.fileHandler.createFolder(folder);
    }
  }
  copyFileToFolder(fileName: string, folder: string, newName?: string) {
    if (!this.fileHandler.verifyIfFileExists(fileName)) {
      this.logger.error(`File does not exist: ${fileName}`);
      return;
    }
    this.createFolderIfNotExist(folder);
    const newFileName = newName ?? this.pathManager.getFileBasename(fileName);
    const outputFileName = this.pathManager.changeDirectory(folder, newFileName);
    this.fileHandler.copyFile(fileName, outputFileName);
  }
  copyFileToFolderOrSkip(fileName: string, folder: string, newName?: string) {
    const fileBasename = this.pathManager.getFileBasename(fileName);
    const outputFileName = this.pathManager.changeDirectory(folder, fileBasename);
    if (this.fileHandler.verifyIfFileExists(outputFileName)) {
      this.logger.log(`File ${fileBasename} already exists in ${folder}. Skipping...`);
      return;
    }
    if (newName) {
      this.copyFileToFolder(fileName, folder, newName);
    } else {
      this.copyFileToFolder(fileName, folder);
    }
  }
}
