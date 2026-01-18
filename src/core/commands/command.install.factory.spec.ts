import { beforeEach, describe, expect, it } from 'vitest'
import { faker } from '@faker-js/faker'

import type { Dependency } from '../dependencies/index.js'

import { CommandInstallFactory } from './command.install.factory.js'

function makeDependency(overrides: Partial<Dependency> = {}): Dependency {
  return {
    name: faker.word.noun(),
    ...(faker.datatype.boolean() ? { version: faker.system.semver() } : {}),
    ...overrides,
  }
}

describe('CommandInstallFactory', () => {
  let factory: CommandInstallFactory
  beforeEach(() => {
    factory = new CommandInstallFactory()
  })
  it('should create a valid npm install command', () => {
    const deps = Array.from({ length: 5 }, () => makeDependency())
    const result = factory.create(deps)
    expect(result.getCommand()).toEqual(
      `npm i -D ${deps.map((dep) => (dep.version ? `${dep.name}@${dep.version}` : dep.name)).join(' ')} --save-exact`,
    )
  })
})
