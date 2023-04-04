import { Entity, Column } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Classes } from "./interfaces/classes.interfaces";

@Entity()
export class ClassesEntity extends BaseEntityApp implements Classes {
  @Column()
  className: string;
}
