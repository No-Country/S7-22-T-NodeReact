import { BaseServices } from "../../shared/services/baseServices";
import { UserEntity } from "../user/user.entity";

export class AuthServices extends BaseServices<UserEntity> {
  constructor() {
    super(UserEntity);
  }
  
}
