import express from "express";
import cors from "cors";
import chalk from "chalk";
import battleRouter from "./routers/battleRouter.js";
import rankingRouter from "./routers/rankingRouter.js";
import handleError from "./middwares/errorHandlerMiddware.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(battleRouter);
app.use(rankingRouter);
app.use(handleError);

const port: number = +process.env.PORT || 5000;
app.listen(port, () => {
    console.log(chalk.green.bold(`Server running on port ${port}`));
});