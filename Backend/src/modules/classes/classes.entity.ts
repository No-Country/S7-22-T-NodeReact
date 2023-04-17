import { CareersEntity, CommissionsEntity, SubjectsEntity } from "..";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class ClassesEntity extends BaseEntityApp {
  @Column({ length: 50 })
  className: string;

  @ManyToMany(() => CareersEntity, (career) => career.classes)
  career: CareersEntity[];

  @OneToMany(() => SubjectsEntity, subject => subject.class)
  subjects: SubjectsEntity[];

  @OneToMany(() => CommissionsEntity, commission => commission.classes)
  commissions: CommissionsEntity[];
}
