import { describe, it, expect, vi } from 'vitest'
import { Command } from './command.js'

describe('Command', () => {
  it('should log the command', () => {
    const commandString = 'hello world!'
    const runMechanism = vi.fn()
    const command = new Command(commandString, runMechanism)
    command.run()
    expect(runMechanism).toHaveBeenCalledWith(commandString)
  })
})
