import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import authRouter from "./router/auth.js";
import { connectDB } from "./database/database.js";
import { config } from "./config.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connectDB()
  .then((db) => {
    console.log("init", db);
    app.listen(config.host.port);
  })
  .catch("error", console.error);
