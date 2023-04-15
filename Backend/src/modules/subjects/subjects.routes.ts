import { BaseRouter } from "../../shared/router/router";
import { SubjectsController } from "./subjects.controller";
import { SubjectsMiddleware } from "./subjects.middlewares";

export class SubjectsRoutes extends BaseRouter<SubjectsController, SubjectsMiddleware> {
  constructor() {
    super(SubjectsController, SubjectsMiddleware, "subjects");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getSubjects(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getSubjectsById(req, res));
    this.router.post(
      `/${path}/post`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.postSubjects(req, res)
    );
    this.router.put(
      `/${path}/put/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.putSubjects(req, res)
    );
    this.router.delete(
      `/${path}/delete/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.deleteSubjects(req, res)
    );
  }
}
