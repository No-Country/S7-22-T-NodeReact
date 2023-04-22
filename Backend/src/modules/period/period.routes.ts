import { BaseRouter } from "../../shared/router/router";
import { PeriodController } from "./period.controller";
import { PeriodMiddlewares } from "./period.middlewares";

export class PeriodRoutes extends BaseRouter < PeriodController, PeriodMiddlewares > {
  constructor() {
    super(PeriodController, PeriodMiddlewares, "period");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getAll(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getById(req, res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.post(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.put(req, res));
    this.router.delete(`/${path}/delete/:id`, (req, res, nex) =>  this.middleware.checkId(req, res, nex), (req, res) => this.controller.delete(req, res));
  }
}
