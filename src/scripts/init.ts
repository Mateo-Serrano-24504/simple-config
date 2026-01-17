#!/usr/bin/env node

import {
  assertValidNodePackage,
  installDependencies,
  configureHusky,
  copyConfigurationFiles,
} from '../index'

assertValidNodePackage()
installDependencies()
configureHusky()
copyConfigurationFiles()
