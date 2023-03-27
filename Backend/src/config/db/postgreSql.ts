import { Sequelize } from "sequelize";

class Database {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize({
      database: process.env.NAME_DB,
      username: process.env.USERNAME_DB,
      password: process.env.PASS_DB,
      host: process.env.HOST_DB,
      dialect: "postgres",
    });

    // Probar la conexión a la base de datos
    this.sequelize
      .authenticate()
      .then(() => console.log("Successful synchronization of models with the database."))
      .catch((error) => console.error("Error synchronizing models with the database:", error));
  }
}

export default new Database().sequelize;
