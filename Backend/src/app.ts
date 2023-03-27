import "dotenv/config";

import Database from "./config/db/postgreSql";
import { Routes } from "./router";
import cors from "cors";
import express from "express";

class App {
  private app = express();
  private PORT = process.env.PORT || 3000;
  private router = new Routes();

  constructor() {
    this.config();
  }

  private config() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }

  private db() {
    Database.sync()
      .then(() => console.log("Successful synchronization of models with the database."))
      .catch((error) => console.error("Error when synchronizing models with the database:", error));
  }
}

new App();
