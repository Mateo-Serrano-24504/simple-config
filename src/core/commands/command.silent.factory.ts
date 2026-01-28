import { CommandSilent } from './command.silent.js';

export class CommandSilentFactory {
  create(command: string) {
    return new CommandSilent(command);
  }
}
