import { BaseServices } from "../../shared/services/baseServices";
import { CourseEntity } from "./course.entity";

export class CourseServices extends BaseServices<CourseEntity> {
  protected Course = new CourseEntity();
  constructor() {
    super(CourseEntity);
  }

  
}
