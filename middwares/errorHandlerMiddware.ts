import { Request, Response, NextFunction } from "express";

export default async function handleError(error, req: Request, res: Response, next: NextFunction){
    console.log(error);
    if(error.type === "notFound") return res.status(404).send(error.message);
    if(error.type === "invalidInput") return res.status(422).send(error.message);
    return res.sendStatus(500);
}