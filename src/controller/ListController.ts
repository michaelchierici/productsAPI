import { NextFunction, Request, Response } from "express";
import { ListService } from "../services/ListService";
import { ProductService } from "../services/ProductService";
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
    const { productId, trainerId } = req.params;
    console.log(productId, trainerId);
    const trainer = await TrainerService.findOne(trainerId);
    const product = await ProductService.findOne(productId);
    const response = await ListService.add(trainer, product);
    res.status(200).json(response);
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await ListService.delete(id);
    res.status(200).json({});
  }
}
