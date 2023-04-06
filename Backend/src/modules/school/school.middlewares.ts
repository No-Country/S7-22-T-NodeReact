import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { SchoolEntity } from "./school.entity";

export class SchoolMiddlewares extends BaseMiddlewares<SchoolEntity> {
  constructor() {
    super(SchoolEntity);
  }
}
