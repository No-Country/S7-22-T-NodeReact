import express, { Router } from "express";
import { AuthRoutes } from "../../modules/auth/period.routes";
import { CareerRoutes } from "../../modules/careers/careers.routes";
import { CourseRoutes } from "../../modules/course/course.routes";
import { PeriodRoutes } from "../../modules/period/period.routes";
import { RolesRouter } from "../../modules/roles/roles.routes";
import { SchoolCareerRoutes } from "../../modules/schoolCareers/schoolCareers.routes";
import { SchoolRoutes } from "../../modules/school/school.routes";
import { SubjectsRoutes } from "../../modules/subjects/subjects.routes";
import { UserRolesRoutes } from "../../modules/userRoles/userRoles.routes";
import { UserRoutes } from "../../modules/user/user.routes";
import { CommissionsRoutes } from "../../modules/commissions/commissions.routes";


export class RoutesApp {
  public router: express.Application;
  constructor() {}

  public routes(): Router[] {
    return [
      new RolesRouter().router,
      new UserRoutes().router,
      new SchoolRoutes().router,
      new CareerRoutes().router,
      new SchoolCareerRoutes().router,
      new SubjectsRoutes().router,
      new CourseRoutes().router,
      new PeriodRoutes().router,
      new AuthRoutes().router,
      new UserRolesRoutes().router,
      new CommissionsRoutes().router
    ];
  }
}
