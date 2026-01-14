import { Command } from './command'
import { execSync } from 'node:child_process'

export class SilentCommandRunner {
  private readonly runSilent: (command: string) => void;
  constructor() {
    this.runSilent = (command: string) => {
      execSync(command, { stdio: 'ignore' })
    };
  }
  runCommand(command: Command) {
    command.run(this.runSilent);
  }
}
