import { Column, Entity } from "typeorm";
import { User, userStates } from "./interfaces/user.interface";

import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class UserEntity extends BaseEntityApp implements User {
  @Column({ unique: true })
  userId: string;

  @Column({ unique: true, length: 50 })
  dni: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({})
  birthDate?: Date;

  @Column({ length: 20 })
  phone?: string;

  @Column({ length: 100 })
  address?: string;

  @Column()
  state: userStates;
}
