import { BaseEntity, UpdateResult } from "typeorm";
import { CareersEntity, CareersServices, ClassServices, ClassesEntity } from "..";

import { BaseServices } from "../../shared/services/baseServices";
import { ClaseStudentStatusEntity } from "../../entity/claseStudentStatus.entity";
import { CommissionsEntity } from "../commissions/commissions.entity";
import { RolesEntity } from "../roles/roles.entity";
import { UserEntity } from "./user.entity";

export class UserServices extends BaseServices<UserEntity> {
  protected readonly userSelectedColumns: string[];

  public careerServices = new CareersServices();
  public classesServices = new ClassServices();

  constructor() {
    super(UserEntity);

    this.userSelectedColumns = [
      "user.userId",
      "user.dni",
      "user.email",
      "user.name",
      "user.lastName",
      "user.birthDate",
      "user.phone",
      "user.address",
      "user.state",
    ];
  }

  async getServicesByUserId(userId: string): Promise<UserEntity | null> {
    return await this.repository.findOne({ where: { userId } });
  }

  async putServiceFromUserId<bodyT extends BaseEntity>(
    userId: string,
    data: bodyT
  ): Promise<UpdateResult | null> {
    return this.repository.update({ userId }, data);
  }

  async deleteServiceByUserId(userId: string): Promise<UserEntity | null> {
    const entityToDelete = await this.repository.findOne({ where: { userId } });
    if (!entityToDelete) {
      return null;
    }
    await this.repository.remove(entityToDelete);
    return entityToDelete;
  }

  async getUserRelationWithRoleById(id: number) {
    console.log("aqui00");
    // return (await this.getRepository(RolesEntity)).createQueryBuilder("role").leftJoinAndSelect("role.user", "user").where({ id }).getOne();
    return this.repository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .where({ id })
      .getOne();
  }

  async getService_RelationByUserId(userId: string) {
    return this.repository
      .createQueryBuilder("user")
      .select(this.userSelectedColumns)
      .leftJoinAndSelect("user.role", "role")
      .where({ userId })
      .getOne();
  }

  async getService_RelationAll() {
    return this.repository
      .createQueryBuilder("user")
      .select(this.userSelectedColumns)
      .leftJoinAndSelect("user.role", "role")
      .getMany();
  }

  async getRole(id: number) {
    return (await this.getRepository(RolesEntity)).findOneBy({ id });
  }

  async getCareer(id: number) {
    return (await this.getRepository(CareersEntity)).findOneBy({ id });
  }

  async saveDataUser(data: UserEntity) {
    return await this.repository.save(data);
  }

  async addUsersToClassesCommissions(user: UserEntity, careerId: number) {
    const careers = await this.careerServices.getClassesInCareer(careerId);

    if (careers) {
      careers.classes.forEach(async (clase) => {
        if (clase.id) {
          const claseInfo = await (
            await this.getRepository(ClassesEntity)
          ).findOne({ where: { id: clase.id }, relations: ["commissions"] });

          if (claseInfo && claseInfo.commissions.length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            await this.addUserToCommission(user, claseInfo.commissions[0].id!);
            // add status clase
            await this.addStatusToClaseStudent(user, clase, "Cursando");
          }
        }
      });
    }
    return careers;
  }

  async addUserToCommission(user: UserEntity, commissionId: number) {
    const commission = await (
      await this.getRepository(CommissionsEntity)
    ).findOne({
      where: { id: commissionId },
      relations: ["users"],
    });

    if (commission) {
      commission.users.push(user);
      await commission.save();
    }

    return commission;
  }

  async getUsersWithRoles() {
    return await this.repository.find({ relations: ["role", "commissions", "career"] });
  }

  async assignStatusToClaseStudent(userId: string, claseId: number, status: string) {
    const student = await (
      await this.getRepository(ClaseStudentStatusEntity)
    ).findOne({
      where: { user: { userId }, clase: { id: claseId } },
      relations: ["clase", "user"],
    });

    if (student) {
      student.status = status;
    }
    await student?.save();

    return student;
  }
  async addStatusToClaseStudent(user: UserEntity, clase: ClassesEntity, status: string) {
    const student = await (
      await this.getRepository(ClaseStudentStatusEntity)
    ).save({ clase, user, status });

    return student;
  }

  async statusToClaseStudent(userId: string) {
    const students = await (
      await this.getRepository(ClaseStudentStatusEntity)
    ).find({ where: { user: { userId } }, relations: ["clase"] });

    if (students) {
      students.forEach((student) => {
        if (!student.status) {
          student.status = "Cursando";
        }
      });
    }

    return students;
  }

  async getUserDetailByEmail(email: string) {
    return await this.repository.findOne({
      where: { email },
      relations: ["role", "commissions", "career"],
    });
  }
}
