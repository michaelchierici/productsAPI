import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { user, password } = req.body;
    const response = await AuthService.login(user, password);
    console.log(response);
    if (response) {
      res.status(200).json(response);
    }
    if (!response) {
      res.status(500).json({ message: "credenciais inválidas!", status: 500 });
    }
  }

  static async createTokenFromRefreshToken(req: Request, res: Response) {
    const { refreshTokenId } = req.body;
    const response = await AuthService.generateTokenFromRefreshToken(
      refreshTokenId
    );
    console.log(refreshTokenId, response);
    if (response) {
      res.status(200).json(response);
    }
  }
}
