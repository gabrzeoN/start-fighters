import express from "express";
import chalk from "chalk";
import battleRouter from "./routers/battleRouter.js";
import rankingRouter from "./routers/rankingRouter.js";

const app = express();
app.use(express.json());
app.use(battleRouter);
app.use(rankingRouter);

const port: number = +process.env.PORT || 5000;
app.listen(port, () => {
    console.log(chalk.green.bold(`Server running on port ${port}`));
});