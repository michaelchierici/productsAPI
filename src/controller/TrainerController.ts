import { NextFunction, Request, Response } from "express";
import { TrainerService } from "../services/TrainerService";

export class TrainerController {
  static create(req: Request, res: Response, next: NextFunction) {
    const { name, pokemons } = req.body;
    const response = TrainerService.create(name, pokemons);
    res.status(200).json(response);
  }

  static findAll(req: Request, res: Response, next: NextFunction) {
    console.log(req.query);
    res.status(200).json({});
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
