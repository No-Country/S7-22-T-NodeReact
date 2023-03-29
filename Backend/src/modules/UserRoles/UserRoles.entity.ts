import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntityDefault } from '../base-module/base.entity';

interface UserRole {
   RoleName: string;
}

@Entity()
export class UserRoles extends BaseEntityDefault implements UserRole {
 
  @Column()
  RoleName: string;
}

