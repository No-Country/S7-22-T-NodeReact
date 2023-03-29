import "dotenv/config";
import "reflect-metadata";

import { AppDataSource } from "./config/db/postgreSql";
import { RoutesApp } from "./shared/router";
import cors from "cors";
import express from "express";
import { UserRolesRouter } from "./modules/UserRoles/UserRoles.route";

class App {
  private app = express();
  private PORT = process.env.PORT || 3000;
  private router = new UserRolesRouter();
  
  

  constructor() {
    this.config();
    this.db();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    this.app.use("/api", this.router.routes);

    this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }

  private db() {
    AppDataSource.initialize()
      .then(() => {
        console.log("Database connected");
      })
      .catch((error) => console.log(error));
  }

 
}

new App();
