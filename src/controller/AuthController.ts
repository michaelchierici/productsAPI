import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { name, password } = req.body;
    const response = await AuthService.checkUser(name, password);
    console.log(req.body);
    if (response) {
      res.status(200).json(response);
    }
    if (!response) {
      res.status(500).json({ message: "credenciais inválidas!" });
    }
  }
}
