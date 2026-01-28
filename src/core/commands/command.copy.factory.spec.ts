import { describe, expect, it } from 'vitest';

import { CommandCopyFactory } from './command.copy.factory.js';

describe('CommandCopyFactory', () => {
  it('should create a valid copy command', () => {
    const factory = new CommandCopyFactory();
    const result = factory.create('ran', 'dom');
    expect(result.getSource()).toEqual('ran');
    expect(result.getDestination()).toEqual('dom');
  });
});
