import express, { Express, Request, Response, Application } from "express";
import { ServerScriptInput } from "../interfaces";
import * as path from "path";

function main({ app }: ServerScriptInput) {
    app.get("/joe", (req: Request, res: Response) => {
        res.send("joe!!!!!");
    });
}
export { main };
