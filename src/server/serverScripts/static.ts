import express, { Express, Request, Response, Application } from "express";
import {ServerScriptInput} from '../interfaces'
import * as path from 'path'

function main({app}: ServerScriptInput) {
    app.use(express.static(path.resolve("../public")))
}
export {main}