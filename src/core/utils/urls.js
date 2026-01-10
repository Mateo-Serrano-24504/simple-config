import { fileURLToPath } from 'node:url'

export function getRemoteUrl() {
  return fileURLToPath(new URL('.', import.meta.url))
}
