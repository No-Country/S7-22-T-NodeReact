import { Request, Response } from "express";

import { AuthEntity } from "./auth.entity";
import { AuthServices } from "./auth.services";
import { generateToken } from "./utils/jwtHandle.utils";
import { checkPassword } from "./utils/checkPass.utils";
import { AuthResponses } from "./utils/auth.constants";
export class AuthController extends AuthServices {
  constructor() {
    super();
  }

  async authLoginUser(req: Request, res: Response) {
    try {
      const { email, password }: AuthEntity = req.body;
      const userFound = await this.repository.findOne({ where: { email } });

      if (userFound === null) return res.status(400).json(AuthResponses.errors.credential);

      const userPassword = userFound?.password;
      const isCorrectPass = await checkPassword(password, userPassword);

      if (!isCorrectPass) return res.status(400).json(AuthResponses.errors.badPassword);
      const token = generateToken(email);

      // sprite, excluding id from response
      const { id, ...user } = userFound;

      return res.status(200).json({
        status: true,
        result: {
          token,
          user,
        },
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
