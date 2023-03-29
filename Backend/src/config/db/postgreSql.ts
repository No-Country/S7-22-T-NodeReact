import { DataSource } from "typeorm";
import { LoginEntity } from "../../modules/auth/entity/login.entity";
import { UserRoles } from "../../modules/UserRoles/UserRoles.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_DB,
  port: 5432,
  username: process.env.USERNAME_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  synchronize: true,
  logging: false,
  entities: [ UserRoles ],
  subscribers: [],
  migrations: [],
});
