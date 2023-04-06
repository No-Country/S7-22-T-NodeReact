import { } from "typeorm";

import { Request, Response } from "express";
import { RolesEntity, RolesServices, UserEntity, UserServices } from "../../modules";

import { AppDataSource } from "../../config/db/postgreSql";
import { UserRegisterReqBody } from "./interfaces/userRegister.interface";

class UserRegisterDTO {
  private actions = { users: new UserServices(), roles: new RolesServices() };

  constructor() {}

  async post(req: Request, res: Response) {
    const body = req.body;
    try {
      const { address, dni, lastName, name, password, phone, roleName }: UserRegisterReqBody = req.body;
      const check = Object.values(body).includes(undefined);
      if (check) throw new Error("Undefined values found");   
      const USER = { dni, address, lastName, name, password, phone } as UserEntity;
      const ROLE = { roleName } as RolesEntity;

      //await this.actions.users.postService(USER);
      const allRoles = await this.actions.roles.getServices();
      
      allRoles.find(({ roleName }) => roleName === ROLE.roleName);

      return res.status(200).json({
        status: true,
        result: true,
      });
    } catch (error) {
      AppDataSource.logger.log;
      if (error instanceof Error) {
        return res.status(500).json({ msg: error.message });
      }
    }
  }
}
