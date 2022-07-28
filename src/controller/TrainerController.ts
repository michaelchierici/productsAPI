import { NextFunction, Request, Response } from "express";
import { TrainerService } from "../services/TrainerService";

export class TrainerController {
  static create(req: Request, res: Response, next: NextFunction) {
    const { user, password } = req.body;
    const response = TrainerService.create(user, password);
    console.log(response);
    res.status(200).json(response);
  }

  static async findAll(req: Request, res: Response, next: NextFunction) {
    const response = await TrainerService.findAll();
    res.status(200).json(response);
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const response = await TrainerService.findOne(id);
    res.status(200).json(response);
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { name } = req.body;
    const response = await TrainerService.update(id, name);
    res.status(200).json(response);
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await TrainerService.delete(id);
    res.status(200).json({});
  }
}
