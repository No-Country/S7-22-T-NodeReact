import { RolesRouter } from "../../modules/roles/roles.routes";
import { Router } from "express";
import { UserRoutes } from "../../modules/user/user.routes";
import express from "express";
import { SchoolRoutes } from "../../modules/school/school.routes";
import { CareerRoutes } from "../../modules/careers/careers.routes";
import { SchoolCareerRoutes } from "../../modules/schoolCareers/schoolCareers.routes";

export class RoutesApp {
  public router: express.Application;
  constructor() { }

  public routes(): Router[] {
    return [
      new RolesRouter().router, 
      new UserRoutes().router, 
      new SchoolRoutes().router, 
      new CareerRoutes().router,
      new SchoolCareerRoutes().router
    ];
  }
}
