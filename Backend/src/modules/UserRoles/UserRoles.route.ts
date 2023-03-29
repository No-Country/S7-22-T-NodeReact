import { BaseRouter } from "../../shared/router/router";
import { UserRolesController } from "./UserRoles.controller";

export class UserRolesRouter extends BaseRouter<UserRolesController> {
  constructor() {
    super(UserRolesController);
  }
  routes(): void {
    this.router.get("/roles", (req, res) => this.controller.showAllRoles(req, res));
    this.router.post("/roles/add", (req, res) => this.controller.createRole(req, res));
    this.router.put("/roles/update", (req, res) => this.controller.createRole(req, res));
  }
}
