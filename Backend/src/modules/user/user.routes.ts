import { BaseRouter } from "../../shared/router/router";
import { UserController } from "./user.controller";
import { UserMiddlewares } from "./user.middlewares";

export class UserRoutes extends BaseRouter<UserController, UserMiddlewares> {
  constructor() {
    super(UserController, UserMiddlewares, "user");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getAll(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getById(req, res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.post(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.put(req, res));
    this.router.delete(`/${path}/delete/:id`, (req, res, nex) =>  this.middleware.checkId(req, res, nex), (req, res) => this.controller.delete(req, res));
  }
}
