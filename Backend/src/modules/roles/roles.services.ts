import { BaseServices } from "../../shared/services/baseServices";
import { RolesEntity } from "./roles.entity";

export class RolesServices extends BaseServices<RolesEntity> {
  constructor() {
    super(RolesEntity);
  }
}
