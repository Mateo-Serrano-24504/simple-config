import { DependencyRepresentationFactory } from '../dependencies/dependencyRepresentationFactory'
import { Dependency } from '../dependencies/dependency'

export class InstallCommandFactory {
  private dependencyRepresentationFactory: DependencyRepresentationFactory;
  constructor() {
    this.dependencyRepresentationFactory = new DependencyRepresentationFactory();
  }
  create(dependencies: Dependency[]) {
    return `npm i -D ${dependencies.map(this.dependencyRepresentationFactory.create).join(' ')}`
  }
}
