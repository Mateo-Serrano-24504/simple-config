import { cpSync, existsSync, mkdirSync } from 'node:fs'

export class FileHandler {
  createFolder(folderName: string, recursive = true) {
    mkdirSync(folderName, { recursive });
  }
  verifyIfFileExists(filePath: string) {
    return existsSync(filePath);
  }
  copyFile(source: string, destination: string) {
    return cpSync(source, destination);
  }
}
