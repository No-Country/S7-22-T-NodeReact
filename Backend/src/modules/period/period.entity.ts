import { Column, Entity } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Period } from "./interfaces/period.interface";

@Entity()
export class PeriodEntity extends BaseEntityApp implements Period {
  @Column()
  year: number;

  @Column()
  initMonth: number;
}
