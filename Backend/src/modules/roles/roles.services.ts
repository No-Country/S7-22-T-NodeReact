import { BaseServices } from "../../shared/services/services";
import { RolesEntity } from "./roles.entity";

export class RolesServices extends BaseServices<RolesEntity> {
  protected roles = new RolesEntity();
  constructor() {
    super();
  }
  async postService(data: RolesEntity): Promise<RolesEntity | null> {
    const { roleName } = data;
    this.roles.roleName = roleName;
    this.roles.save;
    return this.roles;
  }

  async getServices(): Promise<RolesEntity[]> {
    return await RolesEntity.find();
  }
}
