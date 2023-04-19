import { CareersEntity, ClassesEntity, SchoolEntity } from "../";

import { BaseServices } from "../../shared/services/baseServices";

export class CareersServices extends BaseServices<CareersEntity> {
  protected career = new CareersEntity();
  constructor() {
    super(CareersEntity);
  }

  async postService_Relation(
    data: CareersEntity,
    school: SchoolEntity
  ): Promise<CareersEntity | null> {
    const newCareer = this.repository.create(data);
    const savedCareer = await newCareer.save();

    //school.careers = [...school.careers, savedCareer];
    //await school.save();

    return savedCareer;
  }

  async addClaseToCareer(claseId: number, careerId: number) {
    const clase = (await (
      await this.getRepository(ClassesEntity)
    ).findOne({ where: { id: claseId } })) as ClassesEntity;

    const career = await this.repository.findOne({
      where: { id: careerId },
      relations: ["classes"],
    });

    console.log(career);
    if (career) {
      career.classes.push(clase);
      await career.save();
    }

    return career;
  }

  async getClassesInCareer(careerId: number) {
    const career = await this.repository.findOne({
      where: { id: careerId },
      relations: ["classes"],
    });

    return career;
  }
  async getCareersWithClassesService() {
    return await this.repository.find({ relations: ["classes"] });
  }
}
