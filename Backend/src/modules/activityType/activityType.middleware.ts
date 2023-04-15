import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { ActivityTypeEntity } from "./activityType.entity";

export class ActivityTypeMiddleware extends BaseMiddlewares<ActivityTypeEntity> {
  constructor() {
    super(ActivityTypeEntity);
  }  
}