import { RolesEntity } from "../../roles/roles.entity";
import { UserEntity } from "../../user/user.entity";

export interface UserRoles {
  userID: UserEntity;
  roleID: RolesEntity[];
}
