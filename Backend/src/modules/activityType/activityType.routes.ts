import { BaseRouter } from "../../shared/router/router";
import { ActivityTypeController } from "./activityType.controller";
import { ActivityTypeMiddleware } from "./activityType.middleware";

export class ActivityTypeRoutes extends BaseRouter<ActivityTypeController, ActivityTypeMiddleware> {
  constructor() {
    super(ActivityTypeController, ActivityTypeMiddleware, "activity");
  }
  
  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getActivityType(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getActivityTypeById(req,res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.postActivityType(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.putActivityType(req, res));
    this.router.delete(`/${path}/delete/:id`, 
    (req, res, nex) => this.middleware.checkId(req, res, nex), 
    (req, res) => this.controller.deleteActivityType(req, res));
  }
}
