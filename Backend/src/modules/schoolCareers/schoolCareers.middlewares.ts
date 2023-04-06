import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { SchoolCareersEntity } from "./schoolCareers.entity";

export class SchoolCareersMiddleware extends BaseMiddlewares<SchoolCareersEntity> {
  constructor() {
    super(SchoolCareersEntity);
  }

  
}
