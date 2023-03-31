import { BaseServices } from "../../shared/services/services";
import { SchoolEntity } from "./school.entity";

export class SchoolServices extends BaseServices<SchoolEntity> {
  protected school = new SchoolEntity();
  constructor() {
    super();
  }

  async getSchoolService(): Promise<SchoolEntity[]> {
    return await SchoolEntity.find()
  }

  async getSchoolByIdService(id: number): Promise<SchoolEntity | null>{
    const school = await SchoolEntity.findOneBy({ id })
    return school
  }

  async postSchoolServices(data: SchoolEntity): Promise<SchoolEntity | null> {
    const school = SchoolEntity.create(data);
    school.save();
    return school;
  }

  async putSchoolService(id: number, data: SchoolEntity): Promise<SchoolEntity | null> {
    await SchoolEntity.update({ id }, data);
    return this.school;
  }

  async deleteSchoolService(id: number): Promise<SchoolEntity | null> {
    const school = await SchoolEntity.findOneBy({ id });
    school?.remove()
    return school
  }
}
