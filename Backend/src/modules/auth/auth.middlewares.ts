import { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { AuthEntity } from "./auth.entity";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { UserEntity } from "../user/user.entity";
import { checkPassword } from "./utils/checkPass.utils";

export class AuthMiddlewares extends BaseMiddlewares<UserEntity> {
  public secretKey = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;
  constructor() {
    super(AuthEntity);
  }

  async checkLogin(req: Request, res: Response, nex: NextFunction) {
    const { email, password }: AuthEntity = req.body;
    try {
      const authExistUser = await this.repository.findOne({ where: { email } });

      if (!authExistUser)
        return res.status(401).json({
          status: false,
          response: "User mail not exist",
        });

      const authExistPassword = authExistUser.password;
      const isCorrectPass = await checkPassword(password, authExistPassword);

      if (!isCorrectPass)
        res.status(401).json({
          status: false,
          response: "Password not found",
        });

      nex();
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
