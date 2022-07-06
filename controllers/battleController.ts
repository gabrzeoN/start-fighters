import { Request, Response } from "express";

export async function battle(req: Request, res: Response) {
    return res.status(200).send("batl");
}