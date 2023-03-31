import { BaseRouter } from "../../shared/router/router";
import { CareersController } from "./careers.controller";
import { CareersMiddleware } from "./careers.middlewares";

export class CareerRoutes extends BaseRouter<CareersController, CareersMiddleware> {
  constructor() {
    super(CareersController, CareersMiddleware, "career");
  }
  
  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getCareers(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getCareerById(req,res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.postCareer(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.putCareer(req, res));
    this.router.delete(`/${path}/delete/:id`, 
    (req, res, nex) => this.middleware.checkId(req, res, nex), 
    (req, res) => this.controller.deleteCareer(req, res));
  }
}
