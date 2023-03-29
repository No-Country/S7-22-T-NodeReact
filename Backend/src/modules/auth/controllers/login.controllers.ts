import { Request, Response } from "express";

import { Login } from "../interfaces/login.interface";
import { LoginServices } from "../services/login.services";

export class LoginControllers extends LoginServices {
  constructor() {
    super();
  }

  async postUser(req: Request, res: Response) {
    const body: Login  = req.body
    try {
      const userMail = await this.findByMail(body.email);
      
      if(!userMail) res.status(400).json({msg: "mail not found"})

     

      res.status(200).json({
        status: true,
        userMail,
      });
    } catch (error) {}
  }
}
