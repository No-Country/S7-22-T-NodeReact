import { BaseRouter } from "../../shared/router/router";
import { SchoolController } from "./school.contoller";
import { SchoolMiddlewares } from "./school.middlewares";

export class SchoolRoutes extends BaseRouter<SchoolController, SchoolMiddlewares> {
  constructor() {
    super(SchoolController, SchoolMiddlewares, "school");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getSchools(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getSchoolbyId(req, res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.postSchool(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.putSchool(req, res));
    this.router.delete(`/${path}/delete/:id`, 
      (req, res, nex) => this.middleware.checkId(req, res, nex), 
      (req, res) => this.controller.deleteSchool(req, res));
  }
}
