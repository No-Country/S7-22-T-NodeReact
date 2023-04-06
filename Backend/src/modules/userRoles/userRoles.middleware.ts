import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { UserRolesEntity } from "./userRoles.entity";

export class UserRolesMiddlewares extends BaseMiddlewares<UserRolesEntity> {
  constructor() {
    super(UserRolesEntity);
  }
}
