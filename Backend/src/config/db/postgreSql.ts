import { DataSource } from "typeorm";
import { RolesEntity } from "../../modules/roles/roles.entity";
import { UserEntity } from "../../modules/user/user.entity";
import { SchoolEntity } from "../../modules/school/school.entity";
import { CareersEntity } from "../../modules/careers/careers.entity";
import { SchoolCareersEntity } from "../../modules/schoolCareers/schoolCareers.entity";
import { SubjectsEntity } from "../../modules/subjects/subjects.entity";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_DB,
  port: 5432,
  username: process.env.USERNAME_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  synchronize: true,
  logging: false,
  entities: [ RolesEntity, UserEntity, SchoolEntity, CareersEntity, SchoolCareersEntity, SubjectsEntity ],
  subscribers: [],
  migrations: [],
  // ssl:true
});
