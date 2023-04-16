import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { ActivityType } from "./interfaces/activityType.interfaces";

@Entity()
export class ActivityTypeEntity extends BaseEntityApp implements ActivityType {
  @Column({ unique: true, length: 100, nullable: false })
  activityName: string;
}
