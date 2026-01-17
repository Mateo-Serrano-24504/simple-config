import { Dependency } from './dependency'

export class DependencyRepresentationFactory {
  create(dependency: Dependency) {
    return dependency.version ? `${dependency.name}@${dependency.version}` : dependency.name
  }
}
