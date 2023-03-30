import { BaseRouter } from "../../shared/router/router";
import { UserController } from "./user.controller";

export class UserRoutes extends BaseRouter<UserController> {
  constructor() {
    super(UserController, "user");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getUsers(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getUserById(req, res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.addUser(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.updateUser(req, res));
    this.router.delete(`/${path}/delete/:id`, (req, res) => this.controller.deleteUser(req, res));
  }

  
}
