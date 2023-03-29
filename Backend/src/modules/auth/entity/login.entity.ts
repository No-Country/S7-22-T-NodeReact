import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Login } from "../interfaces/login.interface";

@Entity()
export class LoginEntity extends BaseEntity implements Login {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAd?: Date;
}
