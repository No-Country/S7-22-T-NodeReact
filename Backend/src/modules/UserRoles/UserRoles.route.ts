import { BaseRouter } from "../../shared/router/router";
import { UserRolesController } from "./UserRoles.controller";

export class UserRolesRouter extends BaseRouter<UserRolesController> {
  constructor() {
    super(UserRolesController, "roles");
  }
  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.showAllRoles(req, res));
    this.router.post(`/${path}/add`, (req, res) => this.controller.createRole(req, res));
    this.router.put(`/${path}/update`, (req, res) => this.controller.createRole(req, res));
  }
}
