import { BaseServices } from "../../shared/services/baseServices";
import { CareersEntity, SchoolEntity } from "../";

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
}
