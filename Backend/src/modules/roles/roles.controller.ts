import { Request, Response } from "express";

import { RolesEntity } from "./roles.entity";
import { RolesServices } from "./roles.services";

export class RolesController extends RolesServices {
  constructor() {
    super();
  }

  async getAll(req: Request, res: Response) {
    try {
      const roles = await this.getServices();
      res.status(200).json({
        status: true,
        roles,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const role = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        role,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async post(req: Request, res: Response) {
    const body = req.body;
    try {
      const newRole = await this.postService(body);

      res.status(200).json({
        status: true,
        newRole,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async put(req: Request, res: Response) {
    const { id } = req.params;
    const body: RolesEntity = req.body;
    try {
      await this.putService(Number(id), body);
      const roleUpdate = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        roleUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const role = await this.getServicesById(Number(id));

      await this.deleteService(Number(id));
      res.status(200).json({
        status: true,
        role,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
