import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import authRouter from "./router/auth.js";
import scheduleRouter from "./router/schedule.js";
import boardRouter from "./router/board.js";
import { config } from "./config.js";
import { sequelize } from "./database/database.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/auth", authRouter);
app.use("/schedules", scheduleRouter);
app.use("/board", boardRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

sequelize.sync().then((client) => {
  app.listen(config.host.port);
});
