import { Router } from "express";
import { pokemonRouter } from "./pokemonRouter";
import { trainerRouter } from "./trainerRouter";

const Routes = Router();

Routes.use("/pokemons", pokemonRouter);
Routes.use("/trainer", trainerRouter);

export { Routes };
