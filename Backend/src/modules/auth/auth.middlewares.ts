import { NextFunction, Request, Response } from "express";
import { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { UserEntity } from "../user/user.entity";
import { AuthResponses } from "./utils/auth.constants";
import { checkPassword } from "./utils/checkPass.utils";

export class AuthMiddlewares extends BaseMiddlewares<UserEntity> {
  public secretKey = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;
  constructor() {
    super(UserEntity);
  }

  async checkLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const authExistUser = await this.repository.findOne({ select: ["email", "password"], where: { email } });

      if (!authExistUser) return res.status(400).json(AuthResponses.errors.credential);

      const authExistPassword = authExistUser.password;

      const isCorrectPass = await checkPassword(password, authExistPassword);

      if (!isCorrectPass) return res.status(400).json(AuthResponses.errors.badPassword);
      next();
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
