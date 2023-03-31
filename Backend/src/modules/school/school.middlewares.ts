import { NextFunction, Request, Response } from "express";

import { SchoolServices } from "./school.services";

export class SchoolMiddlewares extends SchoolServices {
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
