import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface UserRole {
  roleName: string;
}

@Entity()
export class RolesEntity extends BaseEntity implements UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roleName: string;
}
