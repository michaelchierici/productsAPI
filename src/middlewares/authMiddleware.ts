import { NextFunction, Request } from "express";
import { verify } from "jsonwebtoken";
import { JWT_CONFIG } from "../../enviroments/enviroment";
import { AppError } from "../@types/AppError";
export async function authMiddleware(
  req: Request,

  next: NextFunction
) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    throw new AppError(401, "error");
  }
  const token = bearerToken.split(" ")[1];
  const isTokenvalid = await verify(token, JWT_CONFIG.jwtSecret);
  if (!isTokenvalid) {
    throw new AppError(401, "error");
  }
  next();
}
