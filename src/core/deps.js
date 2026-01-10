import { getRemoteUrl, moveFromPath } from "./utils/index.js";
import { copyFileToFolderOrSkip } from "./files.js";

export const getTemplatesFolder = (templatesRelativePath) => {
  const repositoryDirname = getRemoteUrl();
  return moveFromPath(repositoryDirname, templatesRelativePath);
}
export const getInstallNames = (devDeps) => Object.values(devDeps).map(dep => `${dep.package}@${dep.version}`);
export const copyFilesToTargetOrSkip = (devDepFiles, templatesDirectory) => {
  const cwd = process.cwd();
  Object.values(devDepFiles).forEach(
    group => group.forEach(file => {
        const source = moveFromPath(templatesDirectory, file.source);
        const targetFolder = moveFromPath(cwd, file.target);
        copyFileToFolderOrSkip(source, targetFolder);
      }
    )
  );
}
