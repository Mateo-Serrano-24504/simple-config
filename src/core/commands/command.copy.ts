import { basename, join } from 'node:path';
import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { Command } from './command';
import { Logger } from '../utils/logger';

export class CommandCopy {
  private logger = new Logger();
  private command: Command;
  constructor(
    private source: string,
    private destination: string
  ) {
    this.command = new Command(this.source, () => {
      this.copyFileToFolderOrSkip(this.source, this.destination);
    });
  }
  run() {
    this.command.run();
  }
  getCommand() {
    return this.command.getCommand();
  }
  private copyFileToFolderOrSkip(sourceFile: string, targetDirectory: string) {
    const sourceFileName = basename(sourceFile)
    const outputFileName = join(targetDirectory, sourceFileName)

    if (!existsSync(sourceFile)) {
      this.logger.error(`File does not exist: ${sourceFile}`);
      return
    }
    if (!existsSync(targetDirectory)) {
      this.logger.log(`Creating folder ${targetDirectory}...`);
      mkdirSync(targetDirectory, { recursive: true });
    }
    if (existsSync(outputFileName)) {
      this.logger.log(`File ${sourceFileName} already exists in ${targetDirectory}. Skipping...`);
      return
    }
    const destinationPath = join(targetDirectory, sourceFileName)
    cpSync(sourceFile, destinationPath)
  }
}
