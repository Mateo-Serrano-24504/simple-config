import { CommandCopy } from './command.copy'

export class CommandCopyFactory {
  create(source: string, destination: string) {
    return new CommandCopy(source, destination);
  }
}
