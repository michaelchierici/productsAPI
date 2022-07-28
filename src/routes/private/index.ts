import { Router } from "express";
import { listRouter } from "./listRouter";
import { pokemonRouter } from "./pokemonRouter";
import { trainerRouter } from "./trainerRouter";

const PrivateRoutes = Router();

PrivateRoutes.use("/pokemons", pokemonRouter);
PrivateRoutes.use("/list", listRouter);

export { PrivateRoutes };
