import { BaseRouter } from "../../shared/router/router";
import { RolesController } from "./roles.controller";
import { RolesMiddlewares } from "./roles.middlewares";

export class RolesRouter extends BaseRouter<RolesController, RolesMiddlewares> {
  constructor() {
    super(RolesController, RolesMiddlewares, "roles");
  }
  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getAll(req, res));

    this.router.get(`/${path}/:id`, (req, res) => this.controller.getById(req, res));

    this.router.post(
      `/${path}/post`,
      // (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.post(req, res)
    );

    this.router.put(
      `/${path}/put/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.put(req, res)
    );

    this.router.delete(
      `/${path}/delete/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.delete(req, res)
    );
  }
}
