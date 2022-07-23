import { Router } from "express";
import { PokemonController } from "../../controller/PokemonController";

const pokemonRouter = Router();

pokemonRouter.post("/", PokemonController.create);

pokemonRouter.get("/", PokemonController.findAll);

pokemonRouter.get("/:id", PokemonController.findById);

pokemonRouter.patch("/:id", PokemonController.update);

pokemonRouter.delete("/:id", PokemonController.delete);

export { pokemonRouter };
