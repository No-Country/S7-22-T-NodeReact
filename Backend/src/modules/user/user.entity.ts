import { Column, Entity } from "typeorm";
import { UUID, randomUUID } from "crypto";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { User } from "./interfaces/user.interface";

@Entity()
export class UserEntity extends BaseEntityApp implements User {

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  phone: number;

  @Column()
  cuil: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string
}