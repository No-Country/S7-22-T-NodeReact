import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Subjects } from "./interfaces/subjects.interfaces";

@Entity()
export class SubjectsEntity extends BaseEntityApp implements Subjects{
    
    @Column()
    careerId:number;

    @Column()
    className:string;

}