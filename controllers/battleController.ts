import { Request, Response } from "express";
import battleService from "../services/battleService.js";

interface BattleBody {
    firstUser: string;
    secondUser: string;
}

export async function battle(req: Request, res: Response) {
    const { firstUser, secondUser } : BattleBody = req.body;
    const firstUserData = await battleService.getTotalStar(firstUser);
    const secondUserData = await battleService.getTotalStar(secondUser);
    const battleResult = await battleService.compareStars(firstUserData, secondUserData);
    return res.status(200).send(battleResult);
}