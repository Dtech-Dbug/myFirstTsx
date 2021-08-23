
# myFirstTsx

Introduction to tsx.

## Getting Started (installation and other errors and troubleshoot) (on windows)

- run `npm i typescript --g` th e--g flag saves the dependancy globally. After intallation , you can confirm the version by ` tsc --v`

### typescript not working properly // tsc command not found (Error, troubleshoot)

#### 1. make sure you are using the latest node v16.7.0.(as of now 20.08.2021) You can dowload it from [NodeJS official](https://nodejs.org/en/). Or use Node version Manager (nvm) to upgrade to the latest node v.

#### installing nvm and upgrading to node v16.7.0

- open nvm window repo , [here](https://github.com/coreybutler/nvm-windows/releases)
- scroll down to the assets section to find nvm-setup.zip. Download , extract and install it.
- to upgrade node to the latest version run `nvm use 16.7.0`
- check the node version by `node -v`
- after upgrading node to v16.7.0, install typescript again `npm i -g typescript`

#### execution policy error, powershell

- [check out miscrosoft docs for learning more about execution policy and how and why they are set](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-executionpolicy?view=powershell-7.1)

- [Stackoverflow](https://stackoverflow.com/questions/58796490/tsc-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system)

- exec policies are by default set to unresticted , for security reasons, which does not allow scripts to run on the machine. As, a result, in my PS, tsc won't run because of unrestricted operation. What worked for me was an error log in the PS itself.

#### steps

- open windows PS as admin
- run `Set-ExecutionPolicy -scope currentuser `
- then you will be prompted to set a policy : set _unresctricted_ , [it is by default set to restricted which does not let scripts to run]
- save the changes, by pressing _y_ and you are good to go

#### miscellaneous , for exec policy errors

- run ` Get-ExceutionPolicy --List` to list all the user scopes
- run `Get-ExceutionPolicy` to see the effective exec policy set

---

## what and why tsc?

> typescript is javascript , on steroids

the browser doesn't/can't read typescript codes. so there has to be a some kind of conversion from the typsecript to regular javascript for the browser to read and exec the scripts.

**tsc is short for typescript compiler which transpiles the .ts files to their corresponding .js files so the browser can read and execute w/ ease as with normal javascript**

## typescript work principle (generic)

- write your typescript codes in a .ts file
- transpile the typescript codes into js , by running the typescript compiler
- after running tsc, a corresponding js file is created by the compiler.
- run the js file using `node <filename>.js`

## automate the compilation and runtime 🚀

### typescript

as you may now have guessed, for transpiling the ts codes to js we need to run the tsc cmd everytime we make changes in the ts file. repeatative tasks are mundane. what can be done to track the changes automatically?

- running ` tsc --watch` in the path of the project directory

what the above cmd does is - it watches for every changes made. also throws compile errors in the console, if tsc is watching for every change

### automate runtime with nodemon

nodemon is a package that constantly watches the node env for changes. which prevents the repeatative execution of `node <filename>.js` to track and reflect changes.

- run ` npm init -y` to initialize an npm
- install nodemon using ` npm i nodemon`. nodemon should be included in the package.json in your project dir after installation.
- go to your package.json and edit the script , in the scripts object

![Screenshot (315)](https://user-images.githubusercontent.com/74761990/130408488-e5d37b11-1af3-491d-a318-c36bc07ea441.png)
