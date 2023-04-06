import { AuthEntity } from "./auth.entity";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";

export class AuthMiddlewares extends BaseMiddlewares<AuthEntity> {
  constructor() {
    super(AuthEntity);
  }

}
