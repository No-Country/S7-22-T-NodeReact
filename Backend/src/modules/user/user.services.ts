import { BaseServices } from "../../shared/services/baseServices";
import { UserEntity } from "./user.entity";

export class UserServices extends BaseServices<UserEntity> {
  constructor() {
    super(UserEntity);
  }
}
