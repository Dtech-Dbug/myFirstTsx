# myFirstTsx

Introduction to tsx.

## Getting Started (on windows)

- run `npm i typescript --g` th e--g flag saves the dependancy globally. After intallation , you can confirm the version by ` tsc --v`

### typescript not working properly // tsc command not found (Error, troubleshoot)

#### 1. make sure you are using the latest node v16.7.0.(as of now 20.08.2021) You can dowload it from [NodeJS official](https://nodejs.org/en/). Or use Node version Manager (nvm) to upgrade to the latest node v.

#### installing nvm
- go to the nvm window repo, [here](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7).
- scroll down to the assets section. Then click on nvm-setup.zip.
- Download, extract , install to have nvm working on your device.
- run ```nvm version``` to check the version.
- to upgrade to node latest using nvm, run ``` nvm ls``` to check the list of options. or install and use the  latest version as of now(16.7.0) ``` nvm install 16.7.0 / nvm use 16.7.0 ```

#### 2. now install typescript and check the version
- run ``` npm install typescript --g ``` to install it globally and ``` tsc --v``` to check the version of the typescript compiler.

### how typescript works, behind the scenes?
> typescript is just like javascript on steroids.

- typescript compiler first compiles the .ts file to a .js file to eventually be able to run the codes.
- then we can run that .js file from node, or IDE 
