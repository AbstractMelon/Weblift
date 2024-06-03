import express, { Express, Request, Response, Application } from "express";
import { ServerScriptInput } from "../interfaces";
import * as path from "path";

function main({ app }: ServerScriptInput) {
    app.get("*", (req: Request, res: Response) => {
        res.status(404);
        res.sendFile(path.resolve("./src/client/public/404.html"));
    });
}
export { main };
