import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";

import { authMiddleware } from "./src/middlewares/authMiddleware";
import { PrivateRoutes } from "./src/routes/private";
import { PublicRoutes } from "./src/routes/public";

import { clientErrorHandler } from "./src/middlewares/error/Client";

export class AppController {
  static run() {
    const app = express();
    createConnection();
    const cors = require("cors");

    app.use(express.json());
    app.use(cors());

    app.use("/api", PublicRoutes);
    app.use("/api", authMiddleware, PrivateRoutes);

    app.use(clientErrorHandler);

    app.listen(3000, () => {
      console.log("server is running on http://localhost:3000");
    });
  }
}

AppController.run();
