import { BaseServices } from "../../shared/services/baseServices";
import { ClassesEntity } from "./classes.entity";

export class ClassServices extends BaseServices<ClassesEntity> {
  constructor() {
    super(ClassesEntity);
  }

  async getServices_RelationsAll(): Promise<ClassesEntity[]> {
    return this.repository
      .createQueryBuilder("classes")
      .leftJoinAndSelect("classes.career", "career")
      .leftJoinAndSelect("career.school", "school")
      .getMany();
  }
}
