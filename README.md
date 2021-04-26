## Prerequisite: Node.js
https://nodejs.org/en/download/ (or if you are using [WSL](https://docs.microsoft.com/en-us/windows/wsl/about), use the installation instructions [here](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl))

## Commands to run after you clone the repo into your system:

1. `npm install`
### (This will take time to execute as it downloads the required packages)

2. `npm start`
### If you encouter an issue saying SET is not defined:
 - Change the `package.json` file and under the `scripts` object delete the `SET PORT=3003 &&` under "start" so that it says `"start": "react-scripts-start"`

## License
```
    Copyright (C) 2021 COVID Khoj Team

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

