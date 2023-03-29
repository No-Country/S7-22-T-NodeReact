import { Request, Response } from "express";

import { UserRoles } from "./UserRoles.entity";
import { UserRolesServices } from './UserRoles.services';

export class UserRolesController extends UserRolesServices {

  constructor() {
    super()
  }
  async createRole(req: Request, res: Response) {
    const { RoleName } = req.body;
    try {
      console.log("ejecutando controller");
      const newRole = new UserRoles();

      newRole.RoleName = RoleName;

      newRole.save();

      res.status(200).json(newRole);
    } catch (error) {
      if (error instanceof Error) console.warn(error.message);
    }
  }

  async showAllRoles(req: Request, resp: Response) {
    try {
      
      const users = await UserRoles.find()
      resp.status(200).json(users);
    } catch (error) {
      if (error instanceof Error) console.warn(error.message);
    }
  }
}
