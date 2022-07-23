import { Request, Response, Router } from "express";
import { TrainerController } from "../../controller/TrainerController";

const trainerRouter = Router();

trainerRouter.post("/", TrainerController.create);

trainerRouter.get("/", TrainerController.findAll);

trainerRouter.get("/:id", TrainerController.findById);

trainerRouter.patch("/:id", TrainerController.update);

trainerRouter.delete("/:id", TrainerController.delete);

export { trainerRouter };
