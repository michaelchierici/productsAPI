import { NextFunction, Request, Response } from "express";
import { PokemonService } from "../services/PokemonService";

export class PokemonController {
  static create(req: Request, res: Response, next: NextFunction) {
    const { id, name, type, trainer } = req.body;
    const response = PokemonService.create(id, name, type, trainer);
    res.status(200).json(response);
  }

  static findAll(req: Request, res: Response, next: NextFunction) {
    console.log(req.query);
    const response = PokemonService.findAll();
    res.status(200).json(response);
  }

  static findById(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    res.status(200).json({});
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
