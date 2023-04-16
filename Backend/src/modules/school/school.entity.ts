import { Column, Entity, OneToMany } from "typeorm";

import { CareersEntity, School } from "../";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class SchoolEntity extends BaseEntityApp implements School {
  @Column({ unique: true, length: 100 })
  schoolName: string;

  @Column({ unique: true, length: 15 })
  emailDomain: string;

  @OneToMany(() => CareersEntity, (career) => career.id)
  careers: CareersEntity[];
}
