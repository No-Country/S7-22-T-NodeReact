import { BaseServices } from "../../shared/services/services";
import { RolesEntity } from "./roles.entity";

export class RolesServices extends BaseServices<RolesEntity> {
  protected roles = new RolesEntity();
  constructor() {
    super();
  }
  async getServices(): Promise<RolesEntity[]> {
    return await RolesEntity.find();
  }

  async getServicesById(id: number): Promise<RolesEntity | null> {
    const role = await RolesEntity.findOneBy({ id });
    return role;
  }

  async postService(data: RolesEntity): Promise<RolesEntity | null> {
    const { roleName } = data;
    this.roles.roleName = roleName;
    this.roles.save;
    return this.roles;
  }

  async putService(id: number, data: RolesEntity): Promise<RolesEntity | null> {
    await RolesEntity.update({ id }, data);
    return this.roles;
  }

  async deleteService(id: number): Promise<RolesEntity | null> {
    const role = await RolesEntity.findOneBy({ id });
    role?.remove();
    return role;
  }

}
