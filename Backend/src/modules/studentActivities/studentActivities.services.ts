import { BaseServices } from "../../shared/services/baseServices";
import { StudentActivitiesEntity } from "./studentActivities.entity";

export class StudentActivitiesServices extends BaseServices<StudentActivitiesEntity>{
    protected commissionActivity = new StudentActivitiesEntity();
    constructor() {
        super(StudentActivitiesEntity);
    }
}