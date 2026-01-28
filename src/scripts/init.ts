#!/usr/bin/env node

import {
  assertValidNodePackage,
  installDependencies,
  configureHusky,
  copyConfigurationFiles,
} from '../index.js';

assertValidNodePackage();
installDependencies();
configureHusky();
copyConfigurationFiles();
