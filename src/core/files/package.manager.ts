import { FileHandler } from './file.handler'
import { PathManager } from './path.manager'

export class PackageManager {
  constructor(
    private fileHandler: FileHandler,
    private pathManager: PathManager,
  ) {}
  private getDirnameFromFileInPackage(fileName: string) {
    let current = __dirname
    while (true) {
      if (
        this.fileHandler.verifyIfFileExists(this.pathManager.changeDirectory(current, fileName))
      ) {
        return current
      }
      const parent = this.pathManager.changeDirectory(current, '..')
      if (parent === current) {
        throw new Error(`File ${fileName} not found`)
      }
      current = parent
    }
  }
  verifyValidPackage(folder: string) {
    return this.fileHandler.verifyIfFileExists(
      this.pathManager.changeDirectory(folder, 'package.json'),
    )
  }
  getPackageRootPath() {
    return this.getDirnameFromFileInPackage('package.json')
  }
  getTemplatesFolderPath() {
    return this.getDirnameFromFileInPackage('templates')
  }
}
