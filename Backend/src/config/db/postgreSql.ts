import { AuthEntity } from "../../modules/auth/auth.entity";
import { CareersEntity } from "../../modules/careers/careers.entity";
import { CourseEntity } from "../../modules/course/course.entity";
import { DataSource } from "typeorm";
import { PeriodEntity } from "../../modules/period/period.entity";
import { RolesEntity } from "../../modules/roles/roles.entity";
import { SchoolCareersEntity } from "../../modules/schoolCareers/schoolCareers.entity";
import { SchoolEntity } from "../../modules/school/school.entity";
import { SubjectsEntity } from "../../modules/subjects/subjects.entity";
import { UserEntity } from "../../modules/user/user.entity";
import { UserRolesEntity } from "../../modules/userRoles/userRoles.entity";
import { CommissionsEntity } from "../../modules/commissions/commissions.entity";
import { ClassesEntity } from "../../modules/classes/classes.entity";
import { ActivityTypeEntity } from "../../modules/activityType/activityType.entity";
import { CommissionsActivitiesEntity } from "../../modules/commissionActivities/commissionActivities.entity";
import { StudentActivitiesEntity } from "../../modules/studentActivities/studentActivities.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_DB,
  port: 5432,
  username: process.env.USERNAME_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  synchronize: true,
  logging: false,
  entities: [
    RolesEntity,
    UserEntity,
    UserRolesEntity,
    SchoolEntity,
    CareersEntity,
    SchoolCareersEntity,
    SubjectsEntity,
    PeriodEntity,
    CourseEntity,
    CommissionsEntity,
    ClassesEntity,
    ActivityTypeEntity,
    CommissionsActivitiesEntity,
    StudentActivitiesEntity
  ],
  subscribers: [],
  migrations: [],
  // ssl:true
});
