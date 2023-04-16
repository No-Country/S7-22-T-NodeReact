import { BaseServices } from "../../shared/services/baseServices";
import { SubjectsEntity } from "./subjects.entity";

export class SubjectService extends BaseServices<SubjectsEntity> {
  constructor() {
    super(SubjectsEntity);
  }

  async getServices_RelationAll() {
    return this.repository
      .createQueryBuilder("subject")
      .leftJoinAndSelect("subject.school", "school")
      .getMany();
  }

  async getServices_RelationById(id: number) {
    return this.repository
      .createQueryBuilder("subject")
      .leftJoinAndSelect("user.role", "role")
      .where({ id })
      .getOne();
  }

  async getServices_RelationBySchoolId(id: number) {
    return this.repository
      .createQueryBuilder("subject")
      .leftJoinAndSelect("subject.school", "school")
      .leftJoinAndSelect("subject.career", "career")
      .leftJoinAndSelect("subject.class", "class")
      .where({ school: id })
      .getMany();
  }
}
