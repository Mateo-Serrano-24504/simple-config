import { moveFromPath } from './utils/index.js'
import { getPackageRoot } from './urls.js'
import { copyFileToFolderOrSkip } from './files.js'

export const getTemplatesFolder = (templatesRelativePath) => {
  const packageRoot = getPackageRoot()
  return moveFromPath(packageRoot, templatesRelativePath)
}
export const getInstallNames = (devDeps) =>
  Object.values(devDeps).map((dep) => `${dep.package}@${dep.version}`)
export const copyFilesToTargetOrSkip = (devDepFiles, templatesDirectory) => {
  const cwd = process.cwd()
  devDepFiles.forEach((group) =>
    group.forEach((file) => {
      const source = moveFromPath(templatesDirectory, file.source)
      const targetFolder = moveFromPath(cwd, file.target)
      copyFileToFolderOrSkip(source, targetFolder)
    }),
  )
}
