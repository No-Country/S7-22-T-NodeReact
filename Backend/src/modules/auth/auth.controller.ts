import { Request, Response } from "express";

import { AuthEntity } from "./auth.entity";
import { AuthServices } from "./auth.services";
import { generateToken } from "./utils/jwtHandle.utils";

export class AuthController extends AuthServices {
  constructor() {
    super();
  }

  async authLoginUser(req: Request, res: Response) {
    try {
      const { email }: AuthEntity = req.body;
      const user = await this.repository.findOne({ where: { email } });

      const token = generateToken(email);

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
