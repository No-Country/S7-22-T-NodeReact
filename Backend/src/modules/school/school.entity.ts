import { Column, Entity, OneToMany } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { School } from "./interfaces/school.interface";
import { SchoolCareersEntity } from "../schoolCareers/schoolCareers.entity";

@Entity()
export class SchoolEntity extends BaseEntityApp implements School {

  @Column()
  schoolName: string;

  @Column()
  emailDomain: string;

  @OneToMany(() => SchoolCareersEntity, careers => careers.schoolId)
  careers: SchoolCareersEntity[];
}