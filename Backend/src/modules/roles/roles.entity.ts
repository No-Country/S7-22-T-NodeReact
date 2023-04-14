import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "../user/user.entity";

export interface Role {
  roleName: string;
}

@Entity()
export class RolesEntity extends BaseEntity implements Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  roleName: string;

  @OneToOne(() => UserEntity, user => user.role)
  @JoinColumn({name: "userId"})
  user: UserEntity;

}
