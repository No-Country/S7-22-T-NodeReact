import { Request, Response } from "express";

import { AuthEntity } from "./auth.entity";
import { AuthResponses } from "./utils/auth.constants";
import { AuthServices } from "./auth.services";
import { UserDto } from "../user/user.dto";
import { UserEntity } from "../user/user.entity";
import { checkPassword } from "./utils/checkPass.utils";
import { generateToken } from "./utils/jwtHandle.utils";

export class AuthController extends AuthServices {
  constructor() {
    super();
  }

  async authLoginUser(req: Request, res: Response) {
    try {
      const { email }: AuthEntity = req.body;
      const userFound = await this.repository.findOne({ where: { email } });

      const { id, ...user } = userFound as UserEntity;

      const token = generateToken(user);

      return res.status(200).json({
        status: true,
        result: {
          token,
        },
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
