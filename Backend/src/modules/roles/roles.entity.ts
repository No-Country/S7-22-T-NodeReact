import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToOne(() => UserEntity)
  user: UserEntity;
}
