import { Router } from "express";
import { AuthController } from "../../controller/AuthController";

const authRouter = Router();

authRouter.post("/", AuthController.login);

authRouter.post("/refreshToken", AuthController.createTokenFromRefreshToken);

export { authRouter };
