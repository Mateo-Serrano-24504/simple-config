import { execSync } from 'node:child_process'

import { Command } from './command.js'

export class CommandSilent {
  private command: Command
  constructor(command: string) {
    this.command = new Command(command, () => {
      execSync(command, { stdio: 'ignore' })
    })
  }
  run() {
    this.command.run()
  }
  getCommand() {
    return this.command.getCommand()
  }
}
