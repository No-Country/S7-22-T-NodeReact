import { Entity, JoinColumn, ManyToOne } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { RolesEntity } from "../roles/roles.entity";
import { UserEntity } from "../user/user.entity";
import { UserRoles } from "./interfaces/userRoles.interface";

@Entity()
export class UserRolesEntity extends BaseEntityApp implements UserRoles {
  
  @ManyToOne(() => UserEntity, user => user.userId)
  @JoinColumn({name: "userId",referencedColumnName: "userId"})
  userId: UserEntity;

  @ManyToOne(() => RolesEntity)
  @JoinColumn({ name: "roleID", referencedColumnName: "id" })
  roleID: RolesEntity[];
}
