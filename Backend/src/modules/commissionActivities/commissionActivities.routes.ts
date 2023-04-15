import { BaseRouter } from "../../shared/router/router";
import { CommissionActivityController } from "./commissionActivities.controller";
import { CommissionActivityMiddleware } from "./commissionActivities.middleware";

export class CommissionActivitiesRoutes extends BaseRouter<CommissionActivityController, CommissionActivityMiddleware> {
  constructor() {
    super(CommissionActivityController, CommissionActivityMiddleware, "commissionActivities");
  }
  
  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getCommissionActivities(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getCommissionActivitybyId(req,res));
    this.router.post(`/${path}/post`, (req, res) => this.controller.postCommissionActivities(req, res));
    this.router.put(`/${path}/put/:id`, (req, res) => this.controller.putCommissionActivities(req, res));
    this.router.delete(`/${path}/delete/:id`, 
    (req, res, nex) => this.middleware.checkId(req, res, nex), 
    (req, res) => this.controller.deleteCommissionActivities(req, res));
  }
}
