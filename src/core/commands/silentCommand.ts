import { Command } from './command'
import { execSync } from 'node:child_process'

export class SilentCommand {
  private command: Command;
  constructor(command: string) {
    this.command = new Command(command, () => {
      execSync(command, { stdio: 'ignore' })
    });
  }
  run() {
    this.command.run();
  }
}
