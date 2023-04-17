import { CareersEntity, ClassesEntity, CommissionsEntity, SchoolEntity } from "../";
import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Subjects } from "./interfaces/subjects.interfaces";

@Entity()
export class SubjectsEntity extends BaseEntityApp implements Subjects {
  @ManyToOne(() => SchoolEntity, (school) => school.id)
  @JoinColumn()
  school: SchoolEntity[];

  @ManyToOne(() => CareersEntity, (career) => career.subjects)
  @JoinColumn({ name:  "career_id"})
  career: CareersEntity[];

  @ManyToOne(() => ClassesEntity, (classes) => classes.subjects)
  @JoinColumn({name: "class_id"})
  class: ClassesEntity[];

  @OneToMany(() => CommissionsEntity, commission => commission.subject)
  @JoinColumn({name: "commission_id"})
  commissions: CommissionsEntity[];
}
