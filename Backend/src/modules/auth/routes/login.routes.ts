import { Request, Response } from "express";

import { BaseRouter } from "../../../shared/router/router";
import { LoginControllers } from "../controllers/login.controllers";

export class LoginRoutes extends BaseRouter<LoginControllers> {

  constructor() {
    super(LoginControllers)
  }

  routes(): void {
      console.log("login router")
      this.router.get('/user', (req: Request, res: Response) => { this.controller.postUser(req, res) })
  }
}