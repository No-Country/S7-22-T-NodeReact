import { BaseRouter } from "../../shared/router/router";
import { CareersController } from "./careers.controller";
import { CareersMiddleware } from "./careers.middlewares";

export class CareerRoutes extends BaseRouter<CareersController, CareersMiddleware> {
  constructor() {
    super(CareersController, CareersMiddleware, "career");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getCareers(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getCareerById(req, res));

    this.router.post(
      `/${path}/post`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.postCareer(req, res)
    );
    this.router.post(
      `/${path}/post/addClase`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.addClassesToCareer(req, res)
    );
    this.router.put(
      `/${path}/put/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.putCareer(req, res)
    );
    this.router.delete(
      `/${path}/delete/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.deleteCareer(req, res)
    );
  }
}
