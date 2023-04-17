import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { ClassesEntity } from "../classes/classes.entity";
import { CommissionState } from "./interfaces/commissions.interfaces";
import { SubjectsEntity } from "../subjects/subjects.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class CommissionsEntity extends BaseEntityApp {
  @Column({ unique: true })
  commissionNumber: number;

  @OneToMany(() => SubjectsEntity, (subject) => subject.commissions)
  subject: SubjectsEntity;

  @ManyToMany(() => UserEntity, (user) => user.commissions)
  @JoinTable()
  users: UserEntity[];

  @ManyToOne(() => ClassesEntity, (classes) => classes.commissions)
  classes: ClassesEntity;
}
