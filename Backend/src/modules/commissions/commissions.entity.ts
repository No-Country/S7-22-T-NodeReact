import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { CommissionState, Commissions } from "./interfaces/commissions.interfaces";
import { CourseEntity } from "../course/course.entity";
import { UserEntity } from "../user/user.entity";
import { SubjectsEntity } from "../subjects/subjects.entity";

@Entity()
export class CommissionsEntity extends BaseEntityApp implements Commissions {
  commissionId: number;

  @ManyToOne(() => SubjectsEntity)
  subjectId: number;

  @ManyToOne(() => UserEntity)
  teacherId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "studentId", referencedColumnName: "userId" })
  studentId: string;

  @Column()
  state: CommissionState = "coursing";
}
