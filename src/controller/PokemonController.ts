import { NextFunction, Request, Response } from "express";
import { PokemonService } from "../services/PokemonService";

export class PokemonController {
  static create(req: Request, res: Response, next: NextFunction) {
    const { id, name, type, trainer } = req.body;
    const response = PokemonService.create(name, type, trainer);
    res.status(200).json(response);
  }

  static async findAll(req: Request, res: Response, next: NextFunction) {
    const response = await PokemonService.findAll();
    res.status(200).json(response);
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const response = await PokemonService.findOne(id as any);
    res.status(200).json(response);
  }

  static update(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    res.status(200).json({});
  }

  static delete(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    res.status(200).json({});
  }
}
