import { join } from 'node:path'
import { existsSync, mkdirSync } from 'node:fs'

export const createFolder = (dirname) => mkdirSync(dirname, { recursive: true })
export const verifyValidFile = (filePath) => existsSync(filePath)
export const verifyValidDirectory = (directory) => existsSync(directory)
export const moveFromPath = (directory, filename) => join(directory, filename)
