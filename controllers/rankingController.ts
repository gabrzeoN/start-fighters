import { Request, Response } from "express";
import rankingService from "../services/rankingService.js";

export async function showRanking(req: Request, res: Response) {
    const ranking = await rankingService.showRanking();
    return res.status(200).send(ranking);
}