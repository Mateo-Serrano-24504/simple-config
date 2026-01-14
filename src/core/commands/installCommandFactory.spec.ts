import { beforeEach, describe, expect, it } from 'vitest'
import { faker } from '@faker-js/faker'
import { InstallCommandFactory } from './installCommandFactory'
import { Dependency } from '../dependencies/dependency'

function makeDependency(overrides: Partial<Dependency> = {}): Dependency {
  return {
    name: faker.word.noun(),
    version: faker.datatype.boolean()
      ? faker.system.semver()
      : undefined,
    ...overrides,
  };
}

describe('InstallCommandFactory', () => {
  let factory: InstallCommandFactory;
  beforeEach(() => {
    factory = new InstallCommandFactory();
  });
  it('should create a valid npm install command', () => {
    const deps = Array.from({ length: 5 }, () => makeDependency());
    const result = factory.create(deps);
    expect(result).toEqual(
      `npm i -D ${deps.map(dep => dep.version ? `${dep.name}@${dep.version}` : dep.name).join(' ')}`
    );
  });
})
