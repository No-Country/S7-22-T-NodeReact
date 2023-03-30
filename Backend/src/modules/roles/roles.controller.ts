import { Request, Response } from "express";

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
}
