import type { Dependency } from '../dependencies/index.js';
import { DependencyRepresentationFactory } from '../dependencies/index.js';

import { CommandSilentFactory } from './command.silent.factory.js';

export class CommandInstallFactory {
  private dependencyRepresentationFactory = new DependencyRepresentationFactory();
  private commandSilentFactory: CommandSilentFactory = new CommandSilentFactory();
  create(dependencies: Dependency[]) {
    return this.commandSilentFactory.create(
      `npm i -D ${dependencies
        .map((value) => this.dependencyRepresentationFactory.create(value))
        .join(' ')} --save-exact`,
    );
  }
}
