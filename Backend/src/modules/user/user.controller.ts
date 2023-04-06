import { Request, Response } from "express";

import { UserEntity } from "./user.entity";
import { UserServices } from "./user.services";
import { hashPassword } from "./utils/passwordEncrypt";
import { mailGenerator } from "./utils/mailGenerator";

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
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async post(req: Request, res: Response) {
    const body = req.body as UserEntity;
    try {
      body.email = mailGenerator(body.name, body.lastName);
      body.password = await hashPassword(body.dni);

      const user = await this.postService(body);

      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async put(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      await this.putService(parseInt(id), body);
      const userUpdate = await this.getServicesById(parseInt(id));

      res.status(200).json({
        status: true,
        userUpdate,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.getServicesById(parseInt(id));

      await this.deleteService(parseInt(id));
      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
}
