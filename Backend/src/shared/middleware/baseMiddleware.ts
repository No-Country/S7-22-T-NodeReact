import { NextFunction, Request, Response } from "express";

import { BaseServices } from "../services/services";

export class BaseMiddlewares {

  public service = new BaseServices()

  constructor() {

  }

  async checkId(req: Request, res: Response, nex: NextFunction) {
    const {id} = req.body
    try {
        const idCheck = await this.service.getServicesById(Number(id))
      if (!idCheck)
        return res.status(404).json({
          status: false,
          msg: "User not found",
        });

      return nex()
      
    } catch (error) {
      res.status(500).json({msg: error})
    }
  }

  // async checkRole
  // async checkAdminRole
  // async checkPass
}