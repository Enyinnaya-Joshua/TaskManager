import { json } from "body-parser";
import express, { Application, Request, Response } from "express";
import router from "../TaskManager/route/route";

const port: number = 2022;

const app: Application = express();

require("../TaskManager/cofig/db");
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "server is up and running",
  });
});

app.use("/server", router);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
