import { BaseRouter } from "../../shared/router/router";
import { RolesController } from "./roles.controller";
import { RolesMiddlewares } from "./roles.middlewares";

export class RolesRouter extends BaseRouter<RolesController, RolesMiddlewares> {
  constructor() {
    super(RolesController, RolesMiddlewares, "roles");
  }
  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getAll(req, res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.post(req, res));
    // this.router.put(`/${path}/update`, (req, res) => this.controller.createRole(req, res));
  }
}
