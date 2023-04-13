import { Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Subjects } from "./interfaces/subjects.interfaces";
import { CareersEntity } from "../careers/careers.entity";
import { ClassesEntity } from "../classes/classes.entity";
import { SchoolEntity } from "../school/school.entity";

@Entity()
export class SubjectsEntity extends BaseEntityApp implements Subjects {
  @ManyToOne(() => SchoolEntity)
  @JoinColumn({ name: "schoolId", referencedColumnName: "id" })
  schoolId: number;

  @ManyToOne(() => CareersEntity)
  @JoinColumn({ name: "careerId", referencedColumnName: "id" })
  careerId: number;

  @ManyToOne(() => ClassesEntity)
  @JoinColumn({ name: "classId", referencedColumnName: "id" })
  classId: number;
}
