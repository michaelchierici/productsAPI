import { getRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { JWT_CONFIG } from "../../enviroments/enviroment";
import { RefreshToken } from "../entity/RefreshToken";
import dayjs, { unix } from "dayjs";
import { AppError } from "../@types/AppError";
import { Trainer } from "../entity/Trainer";

export class AuthService {
  static async login(name: any, password: any) {
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
    const expiresIn = dayjs()
      .add(JWT_CONFIG.jwtSecretExpiresIn, "seconds")
      .unix();

    const refreshToken = await refreshTokenRepository.findOne({
      where: { trainer: { id: userId } },
    });

    if (refreshToken) {
      refreshTokenRepository.merge(refreshToken, { expiresIn });
      await refreshTokenRepository.save(refreshToken);
      return refreshToken;
    }
    console.log(refreshToken);
    const newRefreshToken = refreshTokenRepository.create({
      trainer: { id: Number(userId) },
      expiresIn,
    });
    await refreshTokenRepository.save(newRefreshToken);

    return refreshToken;
  }

  static async generateTokenFromRefreshToken(refreshTokenId: any) {
    const refreshTokenRepository = getRepository(RefreshToken);

    const refreshToken = await refreshTokenRepository.findOne({
      where: { id: refreshTokenId },
      relations: ["trainer"],
    });

    if (!refreshToken) {
      throw new AppError(401, "error");
    }

    const token = AuthService.generateToken(refreshTokenId.user);

    const isRefreshTokenExpired = dayjs
      .unix(refreshToken.expiresIn)
      .isAfter(dayjs());

    const expiresIn = dayjs()
      .add(JWT_CONFIG.jwtSecretExpiresIn, "seconds")
      .unix();

    if (isRefreshTokenExpired) {
      throw new AppError(403, "error");
    }

    refreshTokenRepository.merge(refreshToken, { expiresIn });
    await refreshTokenRepository.save(refreshToken);
    console.log(refreshToken);
    return { token, refreshToken, user: refreshToken.trainer };
  }
}
