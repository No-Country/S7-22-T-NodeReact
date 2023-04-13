import { Request, Response } from "express";

import crypto from "crypto";
import { UserEntity } from "./user.entity";
import { UserServices } from "./user.services";
import { hashPassword } from "./utils/passwordEncrypt.utils";
import { mailGenerator } from "./utils/mailGenerator.utils";

export class UserController extends UserServices {
  constructor() {
    super();
  }

  async getAll(_req: Request, res: Response) {
    try {
      const users = await this.getServices();

      res.status(200).json({
        status: true,
        results: users,
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
        result: user,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  /**
   * @description This "First User Registration" endpoint is intended to auto generate the email based on the user's name and password using their DNI, so the user must change their password on the first login. This is because that only admins can register users to the system.
   * @example
   * Request body:  {
   *  "name": "string",
   *  "lastName": "string",
   *  "phone": 0,
   *  "dni": "string",
   *  "address": "string",
   *  "state": "active"
   * }
   */
  async post(req: Request, res: Response) {
    const body = req.body as UserEntity;
    try {
      body.email = mailGenerator(body.name, body.lastName);
      body.password = await hashPassword(body.dni);
      body.userId = crypto.randomUUID();
      console.log(body.password);

      const user = await this.postService(body);

      res.status(200).json({
        status: true,
        result: user,
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
        result: userUpdate,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async putFromUserId(req: Request, res: Response) {
    const { userIdReq } = req.params;
    const { id, userId, password, createdAt, updatedAt, ...body } = req.body;
    try {
      const val = await this.putServiceFromUserId(userIdReq, body);
      console.log(val);
      const userUpdate = await this.getServicesByUserId(userIdReq);

      res.status(200).json({
        status: true,
        result: userUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
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

  async deleteFromUserId(req: Request, res: Response) {
    const { userIdReq } = req.params;
    try {
      const user = await this.getServicesByUserId(userIdReq);

      await this.deleteServiceByUserId(userIdReq);
      res.status(200).json({
        status: true,
        result: user,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
