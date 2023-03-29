import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface UserRole {
   RoleName: string;
}

@Entity()
export class UserRoles extends BaseEntity implements UserRole {
  @PrimaryGeneratedColumn()
    id: number
  @Column()
  RoleName: string;
}

