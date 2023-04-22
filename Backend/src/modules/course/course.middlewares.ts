import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { CourseEntity } from "./course.entity";

export class CourseMiddlewares extends BaseMiddlewares<CourseEntity> {
  constructor() {
    super(CourseEntity);
  }

}
