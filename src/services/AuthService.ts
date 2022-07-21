import { getRepository } from "typeorm";
import { Trainer } from "../entity/Trainer";
import { sign } from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { JWT_CONFIG } from "../../enviroments/enviroment";

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
    console.log(user, "service");

    const token = AuthService.generateToken(user?.id);
    console.log(token);

    return { user, token };
  }

  static generateToken(userId: number) {
    const token = sign({ id: userId }, JWT_CONFIG.jwtSecret, {
      subject: String(userId),
      expiresIn: JWT_CONFIG.jwtSecretExpiresIn,
    });

    return token;
  }
}
