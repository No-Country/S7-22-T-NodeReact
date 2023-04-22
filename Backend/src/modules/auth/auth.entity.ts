import { Auth } from "./interfaces/auth.interface";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Column } from "typeorm";

export class AuthEntity extends BaseEntityApp implements Auth {
  @Column()
  email: string;

  @Column()
  password: string;
}
