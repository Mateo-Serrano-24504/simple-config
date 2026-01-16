import { basename, join } from 'node:path'

export class PathBuilder {
  changeDirectory(folder: string, relativePath: string): string {
    return join(folder, relativePath);
  }
  getFileBasename(file: string): string {
    return basename(file);
  }
}
