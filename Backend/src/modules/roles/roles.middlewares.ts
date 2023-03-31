import { NextFunction, Request, Response } from "express";

import { RolesServices } from "./roles.services";

export class RolesMiddlewares extends RolesServices {
  constructor() {
    super();
  }

  async checkId(req: Request, res: Response, nex: NextFunction) {
    const { id } = req.params;
    try {
      const idCheck = await this.getServicesById(Number(id));
      if (!idCheck)
        return res.status(404).json({
          status: false,
          msg: "ID not found",
        });

      return nex();
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
