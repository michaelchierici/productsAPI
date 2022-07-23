import { Router } from "express";

import { authRouter } from "./authRouter";

const PublicRoutes = Router();

PublicRoutes.use("/login", authRouter);

export { PublicRoutes };
