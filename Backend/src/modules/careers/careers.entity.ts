import { Careers, ClassesEntity, SchoolEntity, SubjectsEntity, UserEntity } from "../";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class CareersEntity extends BaseEntityApp implements Careers {
  @Column({ length: 50 })
  careerName: string;

  @ManyToOne(() => SchoolEntity, (school) => school.id)
  school: SchoolEntity;

  @ManyToMany(() => ClassesEntity, (classes) => classes.career)
  @JoinTable()
  classes: ClassesEntity[];

  @ManyToOne(() => SubjectsEntity, subjects => subjects.career)
  subjects: SubjectsEntity;

  @OneToMany(() => UserEntity, users => users.career)
  users: UserEntity[];
}
