import { Entity, JoinColumn, ManyToOne } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { RolesEntity } from "../roles/roles.entity";
import { UserEntity } from "../user/user.entity";
import { UserRoles } from "./interfaces/userRoles.interface";

@Entity()
export class UserRolesEntity extends BaseEntityApp implements UserRoles {
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "userID", referencedColumnName: "id" })
  userID: UserEntity;

  @ManyToOne(() => RolesEntity)
  @JoinColumn({ name: "roleID", referencedColumnName: "id" })
  roleID: RolesEntity[];
}
