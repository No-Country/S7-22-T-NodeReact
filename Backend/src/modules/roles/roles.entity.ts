import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => UserEntity, (user) => user.role)
  @JoinColumn({name: "user_id"})
  user: UserEntity[];
}
