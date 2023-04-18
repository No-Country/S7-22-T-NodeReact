import { BaseRouter } from "../../shared/router/router";
import { UserController } from "./user.controller";
import { UserMiddlewares } from "./user.middlewares";

export class UserRoutes extends BaseRouter<UserController, UserMiddlewares> {
  constructor() {
    super(UserController, UserMiddlewares, "user");
  }

  routes(path: string): void {
    // GET - ENPOINTS
    this.router.get(`/${path}/`, (req, res) => this.controller.getAll(req, res));
    this.router.get(
      `/${path}/:id`,
      (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res) => this.controller.getByUserId(req, res)
    );

    // POST - ENPOINTS
    this.router.post(`/${path}/adminpost`, (req, res) => this.controller.post(req, res));

    this.router.post(
      `/${path}/post`,
      (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res) => this.controller.post(req, res)
    );
    this.router.post(
      `/${path}/post/addUser`,
      (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res) => this.controller.postAddUser(req, res)
    );

    // PUT - ENPOINTS
    this.router.put(
      `/${path}/put/:userIdReq`,
      (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res) => this.controller.putFromUserId(req, res)
    );
    //this.router.put(`/${path}/put/:id`, (req, res) => this.controller.put(req, res));

    // DELETE - ENPOINTS
    this.router.delete(
      `/${path}/delete/:userIdReq`,
      (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res) => this.controller.deleteFromUserId(req, res)
    );
    /*this.router.delete(
        `/${path}/delete/:id`,
        (req, res, nex) => this.middleware.checkToken(req, res, nex),
        (req, res) => this.controller.delete(req, res)
      );//*/
  }
}
