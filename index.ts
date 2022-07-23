import express, { Request, Response, Router } from "express";
import { Routes } from "./src/routes/routes";
import { createConnection } from "typeorm";

import "reflect-metadata";

export class AppController {
  static run() {
    const cors = require("cors");
    const app = express();
    createConnection();
    app.use(express.json());
    app.use(cors());
    app.use(Routes);
    app.listen(3000, () => {
      console.log("server is running on http://localhost:3000");
    });
  }
}

AppController.run();
