import { ClassesEntity, UserEntity } from "../modules";
import { Column, Entity, ManyToOne } from "typeorm";

import { BaseEntityApp } from "../shared/entity/baseEntity";

@Entity()
export class ClaseStudentStatusEntity extends BaseEntityApp {
  
  @Column()
  status: string;

  @ManyToOne(() => ClassesEntity, clase => clase.userStatus)
  clase: ClassesEntity;
  
  @ManyToOne(() => UserEntity, user => user.userStatus)
  user: UserEntity;

}