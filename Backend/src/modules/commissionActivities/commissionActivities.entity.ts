import { Column, Entity} from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { commissionsActivities } from "./interfaces/commissionActivities.interfaces";

@Entity()
export class CommissionsActivitiesEntity extends BaseEntityApp implements commissionsActivities{
   @Column()
   commissionId: number;
   @Column()
   activityType: number;
   @Column()
   description: string;
   @Column()
   note: number;
}