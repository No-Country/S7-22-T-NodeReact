import { Request, Response } from "express";

import { UserEntity } from "./user.entity";
import { UserServices } from "./user.services";

export class UserController extends UserServices {
  constructor() {
    super();
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.getServices();

      res.status(200).json({
        status: true,
        users,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      
      const user = await this.getServicesById(Number(id));

      if (!user)
        return res.status(404).json({
          status: false,
          msg: "User not found",
        });

      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async addUser(req: Request, res: Response) {
    const body: UserEntity = req.body;
    try {
      body.email = `${body.name.toLowerCase()}.${body.lastName.toLowerCase()}@eduwweb.com`;
      const user = await this.postService(body);
      console.log(user);
      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const body: UserEntity = req.body;
    try {
      const user = await this.getServicesById(Number(id));
      console.log(body);
      if (!user)
        return res.status(404).json({
          status: false,
          msg: "User not found",
        });

       await this.putService(Number(id), body);
       const user2 = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        user2
        
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.getServicesById(Number(id));

      if (!user)
        return res.status(404).json({
          status: false,
          msg: "User not found",
        });

      await this.deleteService(Number(id));
      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
