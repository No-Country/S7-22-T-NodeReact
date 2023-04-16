import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { StudentActivities } from "./interfaces/studentActivities.interfaces";

@Entity()
export class StudentActivitiesEntity extends BaseEntityApp implements StudentActivities {
  @Column()
  commissionId:number;
  @Column()
  studentId:number;
  @Column()
  uploadLink:string;
  @Column()
  rated:boolean;
  @Column()
  activityNote:number;
}
