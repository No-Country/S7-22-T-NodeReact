import { LoginRoutes } from "../../modules/auth/routes/login.routes"
import { Router } from "express"
import { UserRolesRouter } from "../../modules/UserRoles/UserRoles.route";
import express from 'express';

export class RoutesApp {
  public router: express.Application 
  constructor() {
    
    console.log("Usando router index")
  }

  public routes(): Router[]{

    return [new LoginRoutes().router, new UserRolesRouter().router]
  }
}