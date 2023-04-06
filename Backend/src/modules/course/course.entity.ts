import { Column, Entity, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { CommissionsEntity } from "../commissions/commissions.entity";
import { Course } from "./interfaces/course.interface";

@Entity()
export class CourseEntity extends BaseEntityApp implements Course {
  @Column()
  subjectId: number;

  @Column()
  teacherId: number;

  @Column()
  periodId: number;

  @Column()
  coupon: number;

  @OneToMany(() => CommissionsEntity, commission => commission.course)
  commissions: CommissionsEntity[];
}