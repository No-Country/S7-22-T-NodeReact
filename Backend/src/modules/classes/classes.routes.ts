import { BaseRouter } from "../../shared/router/router";
import { ClassesController } from "./classes.controller";
import { ClassesMiddlewares } from "./classes.middleware";

export class ClassesRoutes extends BaseRouter<ClassesController, ClassesMiddlewares> {
  constructor() {
    super(ClassesController, ClassesMiddlewares, "/classes");
  }

  routes(path: string): void {
    // GET - ENPOINTS
    this.router.get(`${path}`, (req, res) => this.controller.getAll(req, res));
    this.router.get(`${path}/:id`, (req, res) => this.controller.getById(req, res));

    // POST - ENPOINTS
    this.router.post(
      `${path}/post`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.createClass(req, res)
    );
    this.router.post(
      `${path}/post/addCommission`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.addCommissionsToClasses(req, res)
    );

    // PUT - ENPOINTS
    this.router.put(
      `${path}/put/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.updateClass(req, res)
    );

    // DELETE - ENPOINTS
    this.router.delete(
      `${path}/delete/:id`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.deleteClass(req, res)
    );
  }
}
