import { AppDataSource } from "../../config/db/postgreSql";
import { BaseEntity } from "typeorm";

export class BaseServices extends BaseEntity {
  protected service = AppDataSource.manager;
  repository = AppDataSource.getRepository
  

  constructor() {
    super()
    
  }


}
