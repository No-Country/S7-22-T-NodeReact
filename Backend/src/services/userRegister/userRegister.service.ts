import { QueryBuilder } from "typeorm";
import { UserEntity } from "../../modules";
import { AppDataSource } from "../../config/db/postgreSql";

/**
 * @description DATA TO BE RECIEVED FOR USER REGISTRATIONS
 * @example body: {
 * name: string,
 * lastname: string,
 * phone: string,
 * dni: string,
 * profession:string,
 * careers: CareersEntity[],
 * courses: CoursesEntity[],
 * role: string
 * }
 */
class UserRegisterService {
  constructor() {}

  method() {
    // QueryBuilder()
    //AppDataSource.getRepository(UserRolesEntity).createQueryBuilder("user").where("userId", {userId}).getOne()
  }
}
