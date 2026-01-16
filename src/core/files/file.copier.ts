import { basename, join } from 'node:path';
import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { Logger } from '../utils';

export class FileCopier {
  private logger = new Logger();
  private createFolderIfNotExist(folder: string) {
    if (!existsSync(folder)) {
      this.logger.log(`Creating folder ${folder}...`);
      mkdirSync(folder);
    }
  }
  copyFileToFolder(fileName: string, folder: string) {
    if (!existsSync(fileName)) {
      this.logger.error(`File does not exist: ${fileName}`);
      return;
    }
    this.createFolderIfNotExist(folder);

    const outputFileName = join(folder, basename(fileName));
    cpSync(fileName, outputFileName);
  }
  copyFileToFolderOrSkip(fileName: string, folder: string) {
    const fileBasename = basename(fileName);
    const outputFileName = join(folder, fileBasename);
    if (existsSync(outputFileName)) {
      this.logger.log(`File ${fileBasename} already exists in ${folder}. Skipping...`);
      return;
    }
    this.copyFileToFolder(fileName, folder);
  }
}
