import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { SchoolCareers } from "./interfaces/schoolCareers.interfaces";
import { SchoolEntity } from "../school/school.entity";

@Entity()
export class SchoolCareersEntity extends BaseEntityApp {
    
    // @Column()
    // schoolId:number;

    // @Column()
    // careerId: number;
    
    @ManyToOne(() => SchoolEntity)
    @JoinColumn({referencedColumnName: "id"})
    schoolId: SchoolEntity;
    
    // @JoinColumn({ name: "career_id" })
    // careerId: SchoolCareersEntity;
}