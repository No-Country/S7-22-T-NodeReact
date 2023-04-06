import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface Role {
  roleName: string;
}

@Entity()
export class RolesEntity extends BaseEntity implements Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roleName: string;
}
