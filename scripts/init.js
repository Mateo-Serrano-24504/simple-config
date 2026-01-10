#!/usr/bin/env node

import {
  assertValidNodePackage,
  installDependencies,
  configureHusky,
  copyConfigurationFiles,
} from '../src/index.js'

assertValidNodePackage()
installDependencies()
configureHusky()
copyConfigurationFiles()
