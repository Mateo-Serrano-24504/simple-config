import { describe, expect, it } from 'vitest'

import { CommandSilentFactory } from './command.silent.factory.js'

describe('CommandSilentFactory', () => {
  it('should create a valid silent command', () => {
    const factory = new CommandSilentFactory()
    const result = factory.create('random')
    expect(result.getCommand()).toEqual('random')
  })
})
