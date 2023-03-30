import { Request, Response } from "express";

import { UserEntity } from "./user.entity";
import { UserServices } from "./user.services";
import { hashPassword } from "./utils/passworEncrypt";
import { mailGenerator } from "./utils/mailGenerator";
import { randomUUID } from "crypto";

export class UserController extends UserServices {
  constructor() {
    super();
  }

  async getAll(req: Request, res: Response) {
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

  async getById(req: Request, res: Response) {
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

  async post(req: Request, res: Response) {
    const body: UserEntity = req.body;
    try {
      //TODO Generates password standar example: dni, after change for first login
      const pass = randomUUID();
      body.email = mailGenerator(body.name, body.lastName);
      body.password = await hashPassword(pass);
      const user = await this.postService(body);

      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async put(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      const user = await this.getServicesById(Number(id));
      
      if (!user)
        return res.status(404).json({
          status: false,
          msg: "User not found",
        });

      await this.putService(Number(id), body);
      const userUpdate = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        userUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.getServicesById(Number(id));

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
