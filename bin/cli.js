#!user/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`), e;
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCmd = `git clone --depth 1 https://github.com/void-anurxg/cli-starter.git ${repoName}`;
const installDepsCmd = `cd ${repoName} && pnpm install`;

console.log(`Cloning repo named ${repoName}...`);
const checkedOut = runCommand(gitCheckoutCmd);
if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}...`);
const installDeps = runCommand(installDepsCmd);
if(!installDeps) process.exit(-1);

console.log(`Ready to go! Follow the further commands to start the project...`);
console.log(`cd ${repoName}`);  
