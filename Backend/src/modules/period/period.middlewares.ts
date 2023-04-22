import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { PeriodEntity } from "./period.entity";

export class PeriodMiddlewares extends BaseMiddlewares<PeriodEntity> {
  constructor() {
    super(PeriodEntity);
  }
}
