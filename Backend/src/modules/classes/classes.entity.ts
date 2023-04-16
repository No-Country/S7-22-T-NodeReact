import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Classes } from "./interfaces/classes.interfaces";
import { CareersEntity } from "..";

@Entity()
export class ClassesEntity extends BaseEntityApp implements Classes {
  @Column({ length: 50 })
  className: string;

  @ManyToOne(() => CareersEntity, (career) => career.id)
  career: CareersEntity;
}
