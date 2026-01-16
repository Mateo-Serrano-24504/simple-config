#!/usr/bin/env node

import {
  assertValidNodePackage,
  installDependencies,
  configureHusky,
  copyConfigurationFiles,
} from '../src'

assertValidNodePackage()
installDependencies()
configureHusky()
copyConfigurationFiles()
