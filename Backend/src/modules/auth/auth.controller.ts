import { Request, Response } from "express";

import { AuthEntity } from "./auth.entity";
import { AuthServices } from "./auth.services";
import { randomUUID } from "crypto";
import { UserEntity } from "../user/user.entity";
import { hashPassword, checkPassword } from "../user/utils/passwordEncrypt";
import { generateToken, verifyToken } from "../user/utils/jwtHandle";
import { BaseServices } from "../../shared/services/baseServices";

export class AuthController extends AuthServices {
  constructor() {
    super();
  }


  async authLoginUser(req: Request, res: Response) {
    try {
      const { email, password }: AuthEntity = req.body;
      const authExistUser = await UserEntity.findOne({ where: { email } });
      if (!authExistUser) {
        return res.status(401).json({ error: "User not exist" });
      }
      const authExistPassword = authExistUser.password;
      const isCorrectPass = await checkPassword(password, authExistPassword);
    
      if(isCorrectPass){
        const token = generateToken(authExistUser.email);
        const data = {
          token,
          user: authExistUser
        };
        return res.json(data);
      }

      if (!isCorrectPass) {
        return res.status(401).json({ error: "Incorrect password" });
      }
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }


  // async getAll(req: Request, res: Response) {
  //   try {
  //     const Auths = await this.getServices();

  //     res.status(200).json({
  //       status: true,
  //       Auths,
  //     });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
  // }

  // async getById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   try {
  //     const Auth = await this.getServicesById(Number(id));

  //     res.status(200).json({
  //       status: true,
  //       Auth,
  //     });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
  // }

  // async post(req: Request, res: Response) {
  //   const body: AuthEntity = req.body;
  //   try {
  //     const Auth = await this.postService(body);

  //     res.status(200).json({
  //       status: true,
  //       Auth,
  //     });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
  // }

  // async put(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const body = req.body;
  //   try {
  //     await this.putService(Number(id), body);
  //     const AuthUpdate = await this.getServicesById(Number(id));

  //     res.status(200).json({
  //       status: true,
  //       AuthUpdate,
  //     });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
  // }

  // async delete(req: Request, res: Response) {
  //   const { id } = req.params;
  //   try {
  //     const Auth = await this.getServicesById(Number(id));

  //     await this.deleteService(Number(id));
  //     res.status(200).json({
  //       status: true,
  //       Auth,
  //     });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
  // }
}
