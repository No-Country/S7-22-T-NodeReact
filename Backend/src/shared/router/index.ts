import { Router } from "express"
import { UserRolesRouter } from "../../modules/UserRoles/UserRoles.route";
import { UserRoutes } from "../../modules/user/user.routes";
import express from 'express';

export class RoutesApp {
  public router: express.Application 
  constructor() {
    
    console.log("Usando router index")
  }

  public routes(): Router[]{

    return [ new UserRolesRouter().router, new UserRoutes().router]
  }
}