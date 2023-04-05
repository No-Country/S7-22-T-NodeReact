import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { User } from "./interfaces/user.interface";
import { UserRolesEntity } from "../userRoles/userRoles.entity";

@Entity()
export class UserEntity extends BaseEntityApp implements User {
  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  phone: number;

  @Column()
  dni: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserRolesEntity, (userRole) => userRole.userID)
  @JoinColumn()
  roleIDId: UserRolesEntity;
}
