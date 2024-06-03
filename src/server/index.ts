// ! All server scripts should be in the serverScripts folder.
// ? If the script needs extra priority put it in the priorityScripts folder and then use runScript(path: string) to run the script.

import express, { Express, Request, Response } from "express";
import * as path from 'path'
import {readdirSync} from 'fs'
import {ServerScriptInput} from './interfaces'

const app = express()
const port = 3000

// Run Script Function
function runScript(path: string,mainFunction: string = 'main') {
  let script = require(path)
  script[mainFunction]({
    app: app
  })
}

// ? Priority Scripts
runScript(path.join(__dirname, 'priorityScripts', 'joe.ts'))

// ? Server Scripts
readdirSync(path.join(__dirname, 'serverScripts')).forEach(file => {
  runScript(path.join(__dirname, 'serverScripts', file))
})


// * Warning: 404 script, this should always be the last script
runScript(path.join(__dirname, 'priorityScripts', '404.ts'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})