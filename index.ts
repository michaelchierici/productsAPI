import express, { Request, Response, Router } from "express";
import { Routes } from "./src/routes/routes";

const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  console.log("hello world");
  res.send("hello world");
});
app.use(Routes);
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
