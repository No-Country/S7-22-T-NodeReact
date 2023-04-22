import { BaseServices } from "../../shared/services/baseServices";
import { ActivityTypeEntity } from "./activityType.entity";

export class ActivityTypeServices extends BaseServices<ActivityTypeEntity>{
    protected career = new ActivityTypeEntity();
    constructor() {
        super(ActivityTypeEntity);
    }
}