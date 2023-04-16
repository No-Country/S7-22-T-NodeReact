import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { StudentActivitiesEntity } from "./studentActivities.entity";

export class StudentActivitiesMiddleware extends BaseMiddlewares<StudentActivitiesEntity>{
  constructor() {
    super(StudentActivitiesEntity);
  }  
}