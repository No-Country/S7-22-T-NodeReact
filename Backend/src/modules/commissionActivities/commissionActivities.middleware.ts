import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { CommissionsActivitiesEntity } from "./commissionActivities.entity";

export class CommissionActivityMiddleware extends BaseMiddlewares<CommissionsActivitiesEntity>{
  constructor() {
    super(CommissionsActivitiesEntity);
  }  
}