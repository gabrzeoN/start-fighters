import { Request, Response, NextFunction } from "express";

export default async function handleError(error, req: Request, res: Response, next: NextFunction){
    console.log("ERROR", error);
    if(error.type === "notFound") return res.status(404).send(error.message);
    if(error.type === "invalidInput") return res.status(422).send(error.message);



    //FIXME erase
    if(error.type === "credentialsDoesNotMatch") return res.status(401).send(error.message);
    if(error.type === "tokenNotFound") return res.status(401).send(error.message);
    if(error.type === "userShouldNotExist") return res.status(409).send(error.message);
    return res.sendStatus(500);
}