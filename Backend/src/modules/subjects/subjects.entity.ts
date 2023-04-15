import { Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Subjects } from "./interfaces/subjects.interfaces";
import { SchoolEntity, CareersEntity, ClassesEntity } from "../";

@Entity()
export class SubjectsEntity extends BaseEntityApp implements Subjects {
  @ManyToOne(() => SchoolEntity, (school) => school.id)
  @JoinColumn()
  school: SchoolEntity[];

  @ManyToOne(() => CareersEntity, (career) => career.id)
  @JoinColumn()
  career: CareersEntity[];

  @ManyToOne(() => ClassesEntity, (classes) => classes.id)
  @JoinColumn()
  class: ClassesEntity[];
}
