import express, { Express, Request, Response } from "express";
import * as path from 'path'

const app = express()
const port = 3000


app.use(express.static(path.resolve("../public/")))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})