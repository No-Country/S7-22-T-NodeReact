import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "../user/user.entity";

interface UserRole {
  roleName: string;
}

@Entity()
export class RolesEntity extends BaseEntity implements UserRole {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  roleName: string;

  @ManyToOne(() => UserEntity, user => user.roles)
  user: UserEntity;
}
