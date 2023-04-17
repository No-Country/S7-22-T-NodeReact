import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { User, userStates } from "./interfaces/user.interface";

import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { CareersEntity } from "..";
import { ClaseStudentStatusEntity } from "../../entity/claseStudent.status.entity";
import { CommissionsEntity } from "../commissions/commissions.entity";
import { RolesEntity } from "../roles/roles.entity";

@Entity()
export class UserEntity extends BaseEntityApp implements User {
  @Column({ unique: true })
  userId: string;

  @Column({ unique: true, length: 50 })
  dni: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({})
  birthDate?: Date;

  @Column({ length: 20 })
  phone?: string;

  @Column({ length: 100 })
  address?: string;

  @Column()
  state: userStates;

  @ManyToOne(() => RolesEntity, (roles) => roles.user, { nullable: false })
  role: RolesEntity;

  @ManyToMany(() => CommissionsEntity, commissions => commissions.users)
  commissions: CommissionsEntity[] | null | undefined;

  @OneToMany(() => CareersEntity, career => career.users)
  career: CareersEntity;

  @OneToMany(() => ClaseStudentStatusEntity, status => status.user)
  userStatus: ClaseStudentStatusEntity[];
}
