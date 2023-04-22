import { BaseServices } from "../../shared/services/baseServices";
import { SchoolEntity } from "./school.entity";

export class SchoolServices extends BaseServices<SchoolEntity> {
  constructor() {
    super(SchoolEntity);
  }

  async getServices_RelationsAll(): Promise<SchoolEntity[]> {
    return this.repository
      .createQueryBuilder("school")
      .select(["id", "careers"])
      .leftJoinAndSelect("school.career", "career")
      .getMany();
  }

  async getServices_RelationsById(id: number): Promise<SchoolEntity | null> {
    return this.repository.findOne({ where: { id }, relations: { careers: true } });
  }
}
