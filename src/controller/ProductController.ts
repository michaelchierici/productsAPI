import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  static create(req: Request, res: Response) {
    const { name, ammount, type, price, img } = req.body;
    const response = ProductService.create(name, ammount, type, price, img);
    res.status(200).json(response);
  }

  static async findAll(req: Request, res: Response) {
    const response = await ProductService.findAll();
    if (response) {
      res.status(200).json(response);
    }
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await ProductService.findOne(id);
    res.status(200).json(response);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const response = await ProductService.update(id, name);
    res.status(200).json(response);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    await ProductService.delete(id);
    res.status(200).json({});
  }
}
