import { beforeEach, describe, expect, it } from 'vitest'
import { DependencyRepresentationFactory } from './dependencyRepresentationFactory'

describe('DependencyRepresentationFactory', () => {
  let factory: DependencyRepresentationFactory;
  beforeEach(() => {
    factory = new DependencyRepresentationFactory();
  });
  it('should create <name>@<version>', () => {
    const result = factory.create(
      { name: 'random', version: 'random' }
    );
    expect(result).toEqual('random@random');
  });
  it('should create <name>', () => {
    const result = factory.create(
      { name: 'random', }
    );
    expect(result).toEqual('random');
  });
})
