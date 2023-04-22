import { BaseServices } from "../../shared/services/baseServices";
import { CommissionsActivitiesEntity } from "./commissionActivities.entity";

export class CommissionActivitiesServices extends BaseServices<CommissionsActivitiesEntity>{
    protected commissionActivity = new CommissionsActivitiesEntity();
    constructor() {
        super(CommissionsActivitiesEntity);
    }
}