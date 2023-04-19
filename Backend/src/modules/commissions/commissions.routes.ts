import { BaseRouter } from "../../shared/router/router";
import { CommissionsController } from "./commissions.controller";
import { CommissionsMiddleware } from "./commissions.middlewares";

export class CommissionsRoutes extends BaseRouter<CommissionsController, CommissionsMiddleware> {
  constructor() {
    super(CommissionsController,  CommissionsMiddleware, "commissions");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getCommissions(req, res));
    this.router.get(`/${path}/admin`, (req, res) => this.controller.getCommissionsAdmin(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getCommissionsById(req, res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.postCommissions(req, res));
    this.router.post(`/${path}/post/admin`, (req, res) => this.controller.addUserCommission(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.putCommissions(req, res));
    this.router.delete(`/${path}/delete/:id`, 
      (req, res, nex) => this.middleware.checkId(req, res, nex), 
      (req, res) => this.controller.deleteCommissions(req, res));
  }
}