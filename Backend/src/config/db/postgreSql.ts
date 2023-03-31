import { DataSource } from "typeorm";
import { RolesEntity } from "../../modules/roles/roles.entity";
import { UserEntity } from "../../modules/user/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_DB,
  port: 5432,
  username: process.env.USERNAME_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  synchronize: true,
  logging: false,
  entities: [ RolesEntity, UserEntity ],
  subscribers: [],
  migrations: [],
  // ssl:true
});
