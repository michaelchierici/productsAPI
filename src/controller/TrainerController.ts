import { NextFunction, Request, Response } from "express";
import { TrainerService } from "../services/TrainerService";

export class TrainerController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { user, password } = req.body;
    const response = await TrainerService.create(user, password);
    if (response) {
      res.status(200).json(response);
      console.log(response, "controller 200");
    } else {
      console.log(response, "controller 401");
      res
        .status(401)
        .json({ message: "nome de usuário já existe", error: 401 });
    }
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
