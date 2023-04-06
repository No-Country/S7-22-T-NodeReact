import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntityApp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAd?: Date;
}
