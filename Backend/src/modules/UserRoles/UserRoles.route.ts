import {Router} from 'express';
import { UserRolesController } from './UserRoles.controller';

export class UserRolesRouter {

     private Router: Router = Router();
    private Controller = new UserRolesController();

    constructor(){
        this.DeclareGetRoutes();
        this.DeclarePostRoutes();
        this.DeclarePutRoutes();
    }
  public getRouter() {
     
        return this.Router;
    }

    private DeclareGetRoutes() {
        this.Router.get("/list", this.Controller.showAllRoles  );
    }

    private DeclarePostRoutes(){
        this.Router.post("/add",  this.Controller.createRole  );
    }
    private DeclarePutRoutes(){
        this.Router.put("/update",  this.Controller.createRole  );
    }

}