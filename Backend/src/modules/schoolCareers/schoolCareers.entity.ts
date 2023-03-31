import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { SchoolCareers } from "./interfaces/schoolCareers.interfaces";

@Entity()
export class SchoolCareersEntity extends BaseEntityApp implements SchoolCareers{
    
    @Column()
    schoolId:number;

    @Column()
    careerId:number;
    
}