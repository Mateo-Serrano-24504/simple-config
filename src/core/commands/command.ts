export class Command {
  constructor(
    protected command: string,
    protected runMechanism: (command: string) => void
  ) {}
  run() {
    this.runMechanism(this.command);
  }
}
