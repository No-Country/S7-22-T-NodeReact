import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { UserRoles } from "./interfaces/userRoles.interface";
import { UserEntity } from "../user/user.entity";
import { RolesEntity } from "../roles/roles.entity";

@Entity()
export class UserRolesEntity extends BaseEntityApp implements UserRoles {
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "userID", referencedColumnName: "id" })
  userID: UserEntity;

  @ManyToOne(() => RolesEntity)
  @JoinColumn({ name: "roleID", referencedColumnName: "id" })
  roleID: RolesEntity[];
}
