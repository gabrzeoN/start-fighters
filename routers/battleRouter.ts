import {Router} from "express";
import { battle } from "../controllers/battleController.js";
import validSchema from "../middwares/validSchemasMiddware.js";
import battleSchema from "../schemas/battleSchema.js";

const battleRouter: Router = Router();
battleRouter.post("/battle", validSchema(battleSchema), battle);

export default battleRouter;