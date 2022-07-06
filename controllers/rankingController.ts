import { Request, Response } from "express";

export async function showRanking(req: Request, res: Response) {
    return res.status(200).send("ran");
}