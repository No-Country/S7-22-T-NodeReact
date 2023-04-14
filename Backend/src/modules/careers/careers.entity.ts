import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Careers } from "./interfaces/careers.interfaces";

@Entity()
export class CareersEntity extends BaseEntityApp implements Careers {
  @Column({ unique: true, length: 50 })
  careerName: string;
}
