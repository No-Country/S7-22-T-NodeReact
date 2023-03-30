import { RolesRouter } from "../../modules/roles/roles.route";
import { Router } from "express";
import { UserRoutes } from "../../modules/user/user.routes";
import express from "express";

export class RoutesApp {
  public router: express.Application;
  constructor() {}

  public routes(): Router[] {
    return [new RolesRouter().router, new UserRoutes().router];
  }
}
