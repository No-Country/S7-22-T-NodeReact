import { Column, Entity } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
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
}
