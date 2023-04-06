import { CareersEntity, CourseEntity, User, Role } from "../../../modules";

export interface UserRegisterReqBody extends User, Role {
  note?: void;
}
