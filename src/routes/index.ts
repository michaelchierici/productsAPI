import { Router } from "express";
import { pokemonRouter } from "./pokemon";
import { trainerRouter } from "./trainer";

const Routes = Router();

Routes.use("/pokemons", pokemonRouter);
Routes.use("/trainer", trainerRouter);

export { Routes };
