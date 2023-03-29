import { Router } from "express";
import { UserRolesRouter } from "../../UserRoles/UserRoles.route";

export class BaseRouter {
  private Router: Router = Router();

  constructor() {
    this.DefineRoute_UserRoles();
  }

  public getRouter() {
    return this.Router;
  }

  private DefineRoute_UserRoles() {
    const defineRoutes = new UserRolesRouter();
    this.Router.use("/roles", defineRoutes.getRouter());
  }
}
