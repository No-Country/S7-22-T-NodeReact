import { BaseServices } from "../../shared/services/baseServices";
import { ClassesEntity } from "./classes.entity";
import { CommissionsEntity } from "../commissions/commissions.entity";
import { user } from "../../docs/user/index";

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

  async addCommissionToClase(commission: CommissionsEntity, idClase: number) {
    const clase = await this.repository.findOne({
      where: { id: idClase },
      relations: ["commissions"],
    });

    if (clase) {
      clase.commissions.push(commission);
      clase.save();
    }

    return clase;
  }

  async getCommission(id: number) {
    return (await this.getRepository(CommissionsEntity)).findOneBy({ id });
  }

  async getCommissionsInClase(idClase: number) {
    const clase = await this.repository.findOne({
      where: { id: idClase },
      relations: ["commissions"],
    });

    return clase?.commissions;
  }

  async getAllClassesWithCommissions() {
    return await this.repository.find({ relations: ["commissions"] });
  }

  async getAllClassesStudents(userId: string) {
    return await this.repository.find({
      where: { commissions: { users: { userId } } },
      relations: ["users"],
    });
  }
}
