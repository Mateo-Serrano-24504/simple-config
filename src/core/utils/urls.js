import { fileURLToPath } from 'node:url'
import { resolve } from "node:path";

export function getPackageRoot() {
  const currentDir = fileURLToPath(new URL('.', import.meta.url))
  return resolve(currentDir, '..', '..')
}
