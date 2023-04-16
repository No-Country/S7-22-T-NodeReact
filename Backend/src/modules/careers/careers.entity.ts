import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Careers, ClassesEntity, SchoolEntity } from "../";

@Entity()
export class CareersEntity extends BaseEntityApp implements Careers {
  @Column({ length: 50 })
  careerName: string;

  @ManyToOne(() => SchoolEntity, (school) => school.id)
  school: SchoolEntity | number;

  @OneToMany(() => ClassesEntity, (classes) => classes.id)
  classes: ClassesEntity[] | number;
}
