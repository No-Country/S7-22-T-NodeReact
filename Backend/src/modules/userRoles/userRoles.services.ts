import { AppDataSource } from "../../config/db/postgreSql";
import { BaseServices } from "../../shared/services/baseServices";
import { UserEntity } from "../user/user.entity";
import { UserRolesEntity } from "./userRoles.entity";

export class UserRolesServices extends BaseServices<UserRolesEntity> {
  constructor() {
    super(UserRolesEntity);
  }

  async getInfo(userId: string) {
    /*AppDataSource.getRepository(UserEntity).createQueryBuilder("user").where({ userId }).leftJoinAndSelect("user_roles_entity.\"roleID\"", "roleId");//*/

    return await AppDataSource.getRepository(UserRolesEntity).query(
      `select 
      user_roles_entity."userId", 
      user_entity.dni, 
      user_entity.email,
      user_entity."name",
      user_entity."lastName",
      roles_entity."roleName",
      user_entity.address,
      user_entity.state
      from user_roles_entity left join user_entity ON user_entity."userId" = user_roles_entity."userId" left join roles_entity ON roles_entity.id = user_roles_entity."roleID" where user_entity."userId" = '${userId}';`
    );
    // return await this.repository.createQueryBuilder("user").where({ userId }).getOne();

    // const firstUser = await dataSource
    // .getRepository(User) Entity
    // .createQueryBuilder("user")
    // .where("user.id = :id", { id: 1 })
    // .getOne()

    //     SELECT
    //     user.id as userId,
    //     user.firstName as userFirstName,
    //     user.lastName as userLastName
    // FROM users user
    // WHERE user.id = 1

    // User {
    //   id: 1,
    //   firstName: "Timber",
    //   lastName: "Saw"
    // }

    // const result = await dataSource
    // .createQueryBuilder('user')
    // .leftJoinAndSelect('user.linkedSheep', 'linkedSheep')
    // .leftJoinAndSelect('user.linkedCow', 'linkedCow')
    // .where('user.linkedSheep = :sheepId', { sheepId })
    // .andWhere('user.linkedCow = :cowId', { cowId });
  }
}
