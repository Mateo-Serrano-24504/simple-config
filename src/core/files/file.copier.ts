import { Logger } from '../utils';
import { FileHandler } from './file.handler'
import { PathBuilder } from './path.builder'

export class FileCopier {
  private pathBuilder = new PathBuilder();
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
    const outputFileName = this.pathBuilder.changeDirectory(
      folder, this.pathBuilder.getFileBasename(fileName)
    );
    this.fileHandler.copyFile(fileName, outputFileName);
  }
  copyFileToFolderOrSkip(fileName: string, folder: string) {
    const fileBasename = this.pathBuilder.getFileBasename(fileName);
    const outputFileName = this.pathBuilder.changeDirectory(folder, fileBasename);
    if (this.fileHandler.verifyIfFileExists(outputFileName)) {
      this.logger.log(`File ${fileBasename} already exists in ${folder}. Skipping...`);
      return;
    }
    this.copyFileToFolder(fileName, folder);
  }
}
