import { getRepository } from "typeorm";
import { Trainer } from "../entity/Trainer";
import { sign } from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { JWT_CONFIG } from "../../enviroments/enviroment";
import dayjs from "dayjs";
import { RefreshToken } from "../entity/RefreshToken";

export class AuthService {
  static async checkUser(name: any, password: any) {
    const userRepository = getRepository(Trainer);
    const user = await userRepository.findOne({
      where: { name },
    });
    if (!user) {
      console.log("falha no login");
      return;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      console.log("credenciais inválidas");
      return;
    }

    const token = AuthService.generateToken(user?.id);
    const refreshToken = await AuthService.generateRefreshToken(user?.id);

    return { user, token, refreshToken };
  }

  static generateToken(userId: number) {
    const token = sign({ id: userId }, JWT_CONFIG.jwtSecret, {
      subject: String(userId),
      expiresIn: JWT_CONFIG.jwtSecretExpiresIn,
    });

    return token;
  }
  static async generateRefreshToken(userId: number | string) {
    const refreshTokenRepository = getRepository(RefreshToken);
    const experesIn = dayjs()
      .add(JWT_CONFIG.jwtSecretExpiresIn - 60, "seconds")
      .unix();

    const refreshToken = await refreshTokenRepository.findOne({
      where: { trainer: { id: userId } },
    });

    if (refreshToken) {
      refreshTokenRepository.merge(refreshToken, { experesIn });
      await refreshTokenRepository.save(refreshToken);
      return refreshToken;
    }
    const newRefreshToken = refreshTokenRepository.create({
      trainer: { id: Number(userId) },
      experesIn,
    });
    await refreshTokenRepository.save(newRefreshToken);

    return refreshToken;
  }
}
