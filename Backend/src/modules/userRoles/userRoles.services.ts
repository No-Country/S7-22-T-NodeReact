import { BaseServices } from "../../shared/services/baseServices";
import { UserRolesEntity } from "./userRoles.entity";

export class UserRolesServices extends BaseServices<UserRolesEntity> {
  constructor() {
    super(UserRolesEntity);
  }
}
