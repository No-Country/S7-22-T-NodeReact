import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { RolesEntity } from "./roles.entity";

export class RolesMiddlewares extends BaseMiddlewares<RolesEntity> {
  constructor() {
    super(RolesEntity);
  }

}
