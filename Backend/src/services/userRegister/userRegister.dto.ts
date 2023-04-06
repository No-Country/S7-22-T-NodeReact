import { Request, Response, RequestHandler } from "express";
import {} from "typeorm";
import { UserEntity, RolesEntity, UserRolesServices, UserServices, RolesServices } from "../../modules";
import { UserRegisterReqBody } from "./interfaces/userRegister.interface";

class UserRegisterDTO {
  private actions = { users: new UserServices(), roles: new RolesServices() };

  constructor() {}

  async post(req: Request, res: Response) {
    try {
      const { address, dni, lastName, name, password, phone, roleName }: UserRegisterReqBody = req.body;
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
      if (error instanceof Error) {
        return res.status(500).json({ msg: error.message });
      }
    }
  }
}
