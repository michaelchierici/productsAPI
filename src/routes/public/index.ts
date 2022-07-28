import { Router } from "express";
import { trainerRouter } from "../private/trainerRouter";

import { authRouter } from "./authRouter";

const PublicRoutes = Router();

PublicRoutes.use("/login", authRouter);
PublicRoutes.use("/trainer", trainerRouter);

export { PublicRoutes };
