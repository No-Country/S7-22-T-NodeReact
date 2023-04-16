import { BaseRouter } from "../../shared/router/router";
import { studentActivitiesController } from "./studentActivities.controller";
import { StudentActivitiesMiddleware } from "./studentActivities.middleware";

export class StudentActivitiesRoutes extends BaseRouter<studentActivitiesController, StudentActivitiesMiddleware> {
  constructor() {
    super(studentActivitiesController, StudentActivitiesMiddleware, "studentActivities");
  }
  
  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getStudentActivities(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getStudentActivitiesbyId(req,res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.postStudentActivity(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.putStudentActivities(req, res));
    this.router.delete(`/${path}/delete/:id`, 
    (req, res, nex) => this.middleware.checkId(req, res, nex), 
    (req, res) => this.controller.deleteStudentActivities(req, res));
  }
}
