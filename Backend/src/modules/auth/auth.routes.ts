import { AuthController } from "./auth.controller";
import { AuthMiddlewares } from "./auth.middlewares";
import { BaseRouter } from "../../shared/router/router";

export class AuthRoutes extends BaseRouter < AuthController, AuthMiddlewares > {
  constructor() {
    super(AuthController, AuthMiddlewares, "auth");
  }

  routes(path: string): void {
    this.router.post(`/${path}/login/post`, (req, res) => this.controller.authLoginUser(req, res));
  }
}
