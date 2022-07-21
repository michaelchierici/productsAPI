import { Router } from "express";
import { authRouter } from "./authRouter";
import { listRouter } from "./listRouter";
import { pokemonRouter } from "./pokemonRouter";
import { trainerRouter } from "./trainerRouter";

const Routes = Router();

Routes.use("/pokemons", pokemonRouter);
Routes.use("/trainer", trainerRouter);
Routes.use("/list", listRouter);
Routes.use("/login", authRouter);

export { Routes };
