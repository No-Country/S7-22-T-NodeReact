import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { School } from "./interfaces/school.interface";

@Entity()
export class SchoolEntity extends BaseEntityApp implements School {

  @Column()
  schoolName: string;

  @Column()
  emailDomain: string;

}