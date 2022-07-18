import { NextFunction, Request, Response } from "express";
import { ListService } from "../services/ListService";
import { PokemonService } from "../services/PokemonService";
import { TrainerService } from "../services/TrainerService";

export class ListController {
  static async findAllByTrainer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const response = await ListService.findList(id);
    res.status(200).json(response);
  }

  static async add(req: Request, res: Response, next: NextFunction) {
    const { pokemonId, trainerId } = req.params;
    console.log(pokemonId, trainerId);
    const trainer = await TrainerService.findOne(trainerId);
    const pokemon = await PokemonService.findOne(pokemonId);
    const response = await ListService.add(trainer, pokemon);
    res.status(200).json(response);
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await ListService.delete(id);
    res.status(200).json({});
  }
}
