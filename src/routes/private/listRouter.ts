import { Router } from "express";
import { ListController } from "../../controller/ListController";

const listRouter = Router();

listRouter.get("/:id", ListController.findAllByTrainer);

listRouter.post("/:trainerId/:pokemonId", ListController.add);

listRouter.delete("/:id", ListController.delete);

export { listRouter };
