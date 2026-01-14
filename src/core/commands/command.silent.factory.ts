import { CommandSilent } from './command.silent'

export class CommandSilentFactory {
  create(command: string) {
    return new CommandSilent(command);
  }
}
