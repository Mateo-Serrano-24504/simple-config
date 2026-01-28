export class Command {
  constructor(
    private command: string,
    private runMechanism: (command: string) => void,
  ) {}
  run() {
    this.runMechanism(this.command);
  }
  getCommand() {
    return this.command;
  }
}
