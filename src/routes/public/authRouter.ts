import { Router } from "express";
import { AuthController } from "../../controller/AuthController";
import { TrainerController } from "../../controller/TrainerController";
import { trainerRouter } from "../private/trainerRouter";

const authRouter = Router();

trainerRouter.post("/", TrainerController.create);

authRouter.post("/", AuthController.login);

authRouter.post("/refreshToken", AuthController.createTokenFromRefreshToken);

export { authRouter };
