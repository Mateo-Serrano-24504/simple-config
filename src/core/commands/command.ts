export class Command {
  constructor(private command: string) {}
  run(runMechanism: (command: string) => void) {
    runMechanism(this.command);
  }
}
