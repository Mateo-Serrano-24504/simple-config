import { Command } from './command'
import { execSync } from 'node:child_process'

export class CommandSilent {
  private command: Command;
  constructor(command: string) {
    this.command = new Command(command, () => {
      execSync(command, { stdio: 'ignore' })
    });
  }
  run() {
    this.command.run();
  }
  getCommand() {
    return this.command.getCommand();
  }
}
