import { Dependency, DependencyRepresentationFactory } from '../dependencies'
import { CommandSilentFactory } from './command.silent.factory'

export class CommandInstallFactory {
  private dependencyRepresentationFactory = new DependencyRepresentationFactory();
  private commandSilentFactory: CommandSilentFactory = new CommandSilentFactory();
  create(dependencies: Dependency[]) {
    return this.commandSilentFactory.create(
      `npm i -D ${dependencies
        .map(this.dependencyRepresentationFactory
          .create)
        .join(' ')}`
    )
  }
}
