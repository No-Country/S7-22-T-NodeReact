import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { CommissionsEntity } from "../commissions/commissions.entity";
import { RolesEntity } from "../roles/roles.entity";
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
  dni: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => CommissionsEntity, commission => commission.user)
  commissions: CommissionsEntity[];
  
  @OneToMany(() => RolesEntity, roles => roles.user)
  roles: RolesEntity[];

  @JoinColumn({ name: "user_id" })
  userId: UserEntity;

}
