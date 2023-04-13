import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { CommissionState, Commissions } from "./interfaces/commissions.interfaces";
import { CourseEntity } from "../course/course.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class CommissionsEntity extends BaseEntityApp implements Commissions {
  @ManyToOne(() => CourseEntity)
  @JoinColumn({ name: "commissionId", referencedColumnName: "commissionId" })
  commissionId: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "studentId", referencedColumnName: "userId" })
  studentId: string;

  @Column()
  state: CommissionState = "coursing";
}
