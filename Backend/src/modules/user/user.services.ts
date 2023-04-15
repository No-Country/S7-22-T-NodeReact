import { BaseEntity, UpdateResult } from "typeorm";

import { BaseServices } from "../../shared/services/baseServices";
import { RolesEntity } from "../roles/roles.entity";
import { UserEntity } from "./user.entity";

export class UserServices extends BaseServices<UserEntity> {
  protected readonly userSelectedColumns: string[];
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

  async putServiceFromUserId<bodyT extends BaseEntity>(userId: string, data: bodyT): Promise<UpdateResult | null> {
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
    return this.repository.createQueryBuilder("user").leftJoinAndSelect("user.role", "role").where({ id }).getOne();
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
}
