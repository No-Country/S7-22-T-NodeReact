import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { CareersEntity } from "./careers.entity";

export class CareersMiddleware extends BaseMiddlewares<CareersEntity> {
  constructor() {
    super(CareersEntity);
  }  
}