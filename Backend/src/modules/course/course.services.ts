import { BaseServices } from "../../shared/services/services";
import { CourseEntity } from "./course.entity";

export class CourseServices extends BaseServices<CourseEntity> {
  protected Course = new CourseEntity();
  constructor() {
    super();
  }

  async getServices(): Promise<CourseEntity[]> {
    return await CourseEntity.find();
  }

  async getServicesById(id: number): Promise<CourseEntity | null> {
    const course = await CourseEntity.findOneBy({ id });
    return course;
  }

  async postService(data: CourseEntity): Promise<CourseEntity | null> {
    const course = CourseEntity.create(data);
    course.save();
    return course;
  }

  async putService(id: number, data: CourseEntity): Promise<CourseEntity | null> {
    await CourseEntity.update({ id }, data);
    return this.Course;
  }

  async deleteService(id: number): Promise<CourseEntity | null> {
    const course = await CourseEntity.findOneBy({ id });
    course?.remove();
    return course;
  }
}
