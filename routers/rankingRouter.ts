import {Router} from "express";
import { showRanking } from "../controllers/rankingController.js";

const rankingRouter: Router = Router();
rankingRouter.get("/ranking", showRanking);

export default rankingRouter;