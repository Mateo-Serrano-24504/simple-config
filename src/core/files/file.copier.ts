import { basename, join } from 'node:path';
import { Logger } from '../utils';
import { FileHandler } from './file.handler'

export class FileCopier {
  constructor(
    private fileHandler: FileHandler,
    private logger: Logger
  ) {}
  private createFolderIfNotExist(folder: string) {
    if (!this.fileHandler.verifyIfFileExists(folder)) {
      this.logger.log(`Creating folder ${folder}...`);
      this.fileHandler.createFolder(folder);
    }
  }
  copyFileToFolder(fileName: string, folder: string) {
    if (!this.fileHandler.verifyIfFileExists(fileName)) {
      this.logger.error(`File does not exist: ${fileName}`);
      return;
    }
    this.createFolderIfNotExist(folder);
    const outputFileName = join(folder, basename(fileName));
    this.fileHandler.copyFile(fileName, outputFileName);
  }
  copyFileToFolderOrSkip(fileName: string, folder: string) {
    const fileBasename = basename(fileName);
    const outputFileName = join(folder, fileBasename);
    if (this.fileHandler.verifyIfFileExists(outputFileName)) {
      this.logger.log(`File ${fileBasename} already exists in ${folder}. Skipping...`);
      return;
    }
    this.copyFileToFolder(fileName, folder);
  }
}
