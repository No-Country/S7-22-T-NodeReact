import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { Commissions } from "./interfaces/commissions.interfaces";
import { CourseEntity } from "../course/course.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class CommissionsEntity extends BaseEntityApp implements Commissions{
    @Column()
    commissionId:number;

    // @Column()
    // courseId:number;
    
    @Column()
    studentId: string;
    
    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @OneToOne(() => CourseEntity, course => course.commissions)
    course: CourseEntity;

    @JoinColumn({ name: "course_id" })
    courseId: CourseEntity;

}