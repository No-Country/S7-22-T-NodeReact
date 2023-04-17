import { CareersEntity, SubjectsEntity } from "..";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class ClassesEntity extends BaseEntityApp {
  @Column({ length: 50 })
  className: string;

  @ManyToOne(() => CareersEntity, (career) => career.id)
  career: CareersEntity;

  @OneToMany(() => SubjectsEntity, subject => subject.class)
  subjects: SubjectsEntity[];
}
