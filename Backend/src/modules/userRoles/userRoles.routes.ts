import { BaseRouter } from "../../shared/router/router";
import { UserRolesController } from "./userRoles.controller";
import { UserRolesMiddlewares } from "./userRoles.middleware";

export class UserRolesRoutes extends BaseRouter<UserRolesController, UserRolesMiddlewares> {
  constructor() {
    super(UserRolesController, UserRolesMiddlewares, "userroles");
  }

  routes(path: string): void {
    // GET - ENPOINTS
    this.router.get(`${path}`, (req, res) => this.controller.getAll(req, res));
    this.router.get(`${path}/:id`, (req, res) => this.controller.getById(req, res));

    // POST - ENPOINTS
    this.router.post(`${path}/post`, (req, res) => this.controller.createUserRole(req, res));

    // PUT - ENPOINTS
    this.router.put(`${path}/put/:id`, (req, res) => this.controller.updateUserRole(req, res));

    // DELETE - ENPOINTS
    this.router.delete(`${path}/delete/:id`, (req, res) => this.controller.deleteUserRole(req, res));
  }
}
