import { NextFunction, Request, Response } from "express";

export class TrainerController {
  static create(req: Request, res: Response, next: NextFunction) {
    const { id, name, type, trainer } = req.body;
    //const response = PokemonService.create(id, name, type, trainer);
    res.status(200).json({});
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
