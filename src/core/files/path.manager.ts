import { basename, join } from 'node:path'

export class PathManager {
  changeDirectory(folder: string, relativePath: string): string {
    return join(folder, relativePath);
  }
  getFileBasename(file: string): string {
    return basename(file);
  }
}
