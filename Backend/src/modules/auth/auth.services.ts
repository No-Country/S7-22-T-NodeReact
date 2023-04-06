import { AuthEntity } from "./auth.entity";
import { BaseServices } from "../../shared/services/baseServices";

export class AuthServices extends BaseServices<AuthEntity> {
  protected Auth = new AuthEntity();
  constructor() {
    super(AuthEntity);
  }

}
