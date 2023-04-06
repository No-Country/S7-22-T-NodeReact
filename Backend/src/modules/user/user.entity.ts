import { Column, Entity } from "typeorm";
import { User, userStates } from "./interfaces/user.interface";

import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class UserEntity extends BaseEntityApp implements User {
  
  @Column({ unique: true })
  userId: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  phone: number;

  @Column({ unique: true })
  dni: string;

  @Column()
  address: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  state: userStates;
}
