import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Course } from "./interfaces/course.interface";
import { SubjectsEntity } from "../subjects/subjects.entity";
import { UserEntity } from "../user/user.entity";
import { PeriodEntity } from "../period/period.entity";

@Entity()
export class CourseEntity extends BaseEntityApp implements Course {
  @Column({ unique: true })
  commissionId: number;

  @ManyToOne(() => SubjectsEntity)
  @JoinColumn({ name: "subjectId", referencedColumnName: "id" })
  subjectId: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "teacherId", referencedColumnName: "userId" })
  teacherId: string;

  @ManyToOne(() => PeriodEntity)
  @JoinColumn({ name: "periodId", referencedColumnName: "id" })
  periodId: number;

  @Column()
  coupon: number;
}
