import { CareersEntity, CommissionsEntity, SubjectsEntity } from "..";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { ClaseStudentStatusEntity } from "../../entity/claseStudent.status.entity";

@Entity()
export class ClassesEntity extends BaseEntityApp {
  @Column({ length: 50 })
  className: string;

  @ManyToMany(() => CareersEntity, (career) => career.classes)
  career: CareersEntity[] | null | undefined;

  @OneToMany(() => SubjectsEntity, subject => subject.class)
  subjects: SubjectsEntity[];

  @OneToMany(() => CommissionsEntity, commission => commission.classes)
  commissions: CommissionsEntity[];

  @OneToMany(() => ClaseStudentStatusEntity, status => status.clase)
  userStatus: ClaseStudentStatusEntity[];
}
