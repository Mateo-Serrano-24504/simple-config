import { basename } from 'node:path'
import { cpSync } from 'node:fs'
import { createFolder, verifyValidFile, verifyValidDirectory, moveFromPath } from './utils/index.js'

export const verifyNodePackage = () => verifyValidFile(moveFromPath(process.cwd(), 'package.json'))
export function copyFileToFolderOrSkip(sourceFile, targetDirectory) {
  const sourceFileName = basename(sourceFile)
  const outputFileName = moveFromPath(targetDirectory, sourceFileName)

  if (!verifyValidFile(sourceFile)) {
    console.error(`File does not exist: ${sourceFile}`)
    return
  }
  if (!verifyValidDirectory(targetDirectory)) {
    console.log(`Creating folder ${targetDirectory}...`)
    createFolder(targetDirectory)
  }
  if (verifyValidFile(outputFileName)) {
    console.log(`File ${sourceFileName} already exists in ${targetDirectory}. Skipping...`)
    return
  }
  const destinationPath = moveFromPath(targetDirectory, sourceFileName)
  cpSync(sourceFile, destinationPath)
}
