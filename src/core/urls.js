import { fileURLToPath } from 'node:url'
import { moveFromPath, verifyValidFile } from './utils/files.js'

export function getPackageRoot() {
  let current = fileURLToPath(new URL('.', import.meta.url))

  while (true) {
    if (verifyValidFile(moveFromPath(current, 'package.json'))) {
      return current
    }

    const parent = moveFromPath(current, '..')

    if (parent === current) {
      throw new Error('package.json not found')
    }

    current = parent
  }
}
