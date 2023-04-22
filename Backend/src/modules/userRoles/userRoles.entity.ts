import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { RolesEntity } from "../roles/roles.entity";
import { UserEntity } from "../user/user.entity";
import { UserRoles } from "./interfaces/userRoles.interface";

@Entity()
export class UserRolesEntity extends BaseEntityApp {
  
  // @OneToOne(() => UserEntity, user => user.userRole)
  // @JoinColumn({ name: "userId"})
  // user: UserEntity;

  @ManyToOne(() => RolesEntity)
  @JoinColumn({ name: "roleId", referencedColumnName: "id" })
  roleId: number;
}
