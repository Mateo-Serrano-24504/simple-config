import { execSync } from "node:child_process";

export const runCommand = (command) => execSync(command, { stdio: 'inherit' });
export const runCommandSilent = (command) => execSync(command, { stdio: 'ignore' });
