import "reflect-metadata";
import "dotenv/config";

import { AppDataSource } from "./config/db/postgreSql";
import { BaseRouter } from "./modules/base-module/routes/base.routes";
import cors from "cors";
import express from "express";

class App {
  private app = express();
  private PORT = process.env.PORT || 3000;
  private router = new BaseRouter();

  constructor() {
    this.config();
    this.db();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    this.app.use(this.router.getRouter());


    this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }

  private db() {
    AppDataSource.initialize()
      .then(() => {
        console.log("Database ok");
      })
      .catch((error) => console.log(error));
  }
}

new App();
