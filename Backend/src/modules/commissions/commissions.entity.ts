import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Commissions } from "./interfaces/commissions.interfaces";

@Entity()
export class CommissionsEntity extends BaseEntityApp implements Commissions{
    @Column()
    commissionId:number;

    @Column()
    courseId:number;
    
    @Column()
    studentId:string;
}