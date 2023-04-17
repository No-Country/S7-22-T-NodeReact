import { Careers, ClassesEntity, SchoolEntity, SubjectsEntity } from "../";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class CareersEntity extends BaseEntityApp implements Careers {
  @Column({ length: 50 })
  careerName: string;

  @ManyToOne(() => SchoolEntity, (school) => school.id)
  school: SchoolEntity | number;

  @OneToMany(() => ClassesEntity, (classes) => classes.id)
  classes: ClassesEntity[] | number;

  @ManyToOne(() => SubjectsEntity, subjects => subjects.career)
  subjects: SubjectsEntity;
}
