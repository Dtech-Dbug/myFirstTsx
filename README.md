# myFirstTsx

Introduction to tsx.

## Getting Started (on windows)

- run `npm i typescript --g` th e--g flag saves the dependancy globally. After intallation , you can confirm the version by ` tsc --v`

### typescript not working properly // tsc command not found (Error, troubleshoot)

#### 1. make sure you are using the latest node v16.7.0.(as of now 20.08.2021) You can dowload it from [NodeJS official](https://nodejs.org/en/). Or use Node version Manager (nvm) to upgrade to the latest node v.

- changing the path to ` C:\Users\<your user name>\AppData\Roaming\npm> npm i typescript --g. -
- run `tsc --v` to be sure

#### installing nvm and upgrading to node v16.7.0

- open nvm window repo , [here](https://github.com/coreybutler/nvm-windows/releases)
- scroll down to the assets section to find nvm-setup.zip. Download , extract and install it.
- to upgrade node to the latest version run `nvm use 16.7.0`
- check the node version by `node -v`
- after upgrading node to v16.7.0, install typescript again `npm i -g typescript`

#### execution policy error, powershell

- [check out miscrosoft docs for learning more about execution policy and how and why they are set](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-executionpolicy?view=powershell-7.1)

- [Stackoverflow](https://stackoverflow.com/questions/58796490/tsc-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system)

- exec policies are by default set to unresticted which does not allow scripts to run on the machine. As, a result, in my PS, tsc won't run because of unrestricted opeartion. What worked for me was an error log in the PS itself.

#### steps

- open windows PS as admin
- run `Set-ExecutionPolicy -scope currentuser `
- then you will be set to set a policy : set _unresctricted_ , [it is by default set to restricted which does not let scripts to run]
- save the changes, by pressing _y_ and you are good to go

#### miscellaneous , for exec policy errors

- run ` Get-ExceutionPolicy --List` to list all the user scopes
- run `Get-ExceutionPolicy` to see the effective exec policy set

---
