import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CommissionState, Commissions } from "./interfaces/commissions.interfaces";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { SubjectsEntity } from "../subjects/subjects.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class CommissionsEntity extends BaseEntityApp {

  @Column({unique: true})
  commissionId: number;

  @ManyToOne(() => SubjectsEntity, subject => subject.commissions)
  subject: SubjectsEntity;

  @OneToMany(() => UserEntity, user => user.commissions)
  users: UserEntity[];

  @Column()
  state: CommissionState = "coursing";
}
