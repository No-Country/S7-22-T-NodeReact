import { Request, Response } from "express";

import { UserRolesServices } from "./userRoles.services";

export class UserRolesController extends UserRolesServices {
  constructor() {
    super();
  }

  async getAll(_req: Request, res: Response) {
    try {
      const userRoles = await this.getServices();

      res.status(200).json({
        status: true,
        userRoles,
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
      const userRole = await this.getServicesById(parseInt(id));

      res.status(200).json({
        status: true,
        userRole,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async createUserRole(req: Request, res: Response) {
    const body = req.body;
    try {
      const userRole = await this.postService(body);
      res.status(200).json({
        status: true,
        userRole,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async updateUserRole(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;

    try {
      await this.putService(parseInt(id), body);
      const userRoleUpdated = await this.getServicesById(parseInt(id));

      res.status(200).json({
        status: true,
        userRoleUpdated,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async deleteUserRole(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userRole = await this.getServicesById(parseInt(id));

      await this.deleteService(parseInt(id));

      res.status(200).json({
        status: true,
        userRole,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
}
