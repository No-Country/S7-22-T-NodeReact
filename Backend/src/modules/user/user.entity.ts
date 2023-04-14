import { Column, Entity, OneToOne } from "typeorm";
import { User, userStates } from "./interfaces/user.interface";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { RolesEntity } from "../roles/roles.entity";
import { UserRolesEntity } from "../userRoles/userRoles.entity";

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

  @OneToOne(() => RolesEntity, roles => roles.user)
  role: RolesEntity;
}
