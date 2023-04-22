import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { CommissionsEntity } from "./commissions.entity";

export class CommissionsMiddleware extends BaseMiddlewares<CommissionsEntity> {
  constructor() {
    super(CommissionsEntity);
  }  
}