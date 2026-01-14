import { describe, it, expect, vi } from 'vitest';
import { Command } from './command'

describe('Command', () => {
  it('should log the command', () => {
    const commandString = 'hello world!';
    const command = new Command(commandString);
    const runMechanism = vi.fn();
    command.run(runMechanism as never);
    expect(runMechanism).toHaveBeenCalledWith(commandString);
  });
});
