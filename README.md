## Prerequisite: Node.js
https://nodejs.org/en/download/

## Commands to run after you clone the repo into your system:

1. `npm install`
### (This will take time to execute as it downloads the required packages)

2. `npm start`
### If you encouter an issue saying SET is not defined:
 - Change the `package.json` file and under the `scripts` object delete the `SET PORT=3003 &&` under "start" so that it says `"start": "react-scripts-start"`

