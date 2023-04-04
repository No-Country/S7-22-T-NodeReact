import "dotenv/config";
import "reflect-metadata";

import { AppDataSource } from "./config/db/postgreSql";
import { RoutesApp } from "./shared/router";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import swaggerSetup from "./docs/swagger.doc";
import swaggerUi from "swagger-ui-express";

class App {
  private app = express();
  private PORT = process.env.PORT || 3000;
  private router = new RoutesApp();
  private swaggerUi = swaggerUi;

  constructor() {
    this.config();
    this.db();
    this.swaggerUi = swaggerUi;
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use("/api/docs", this.swaggerUi.serve, this.swaggerUi.setup(swaggerSetup));
    this.app.use("/api", this.router.routes());

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
