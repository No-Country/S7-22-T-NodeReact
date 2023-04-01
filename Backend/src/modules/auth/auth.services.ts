import { AuthEntity } from "./auth.entity";
import { BaseServices } from "../../shared/services/services";

export class AuthServices extends BaseServices<AuthEntity> {
  protected Auth = new AuthEntity();
  constructor() {
    super();
  }

  async getServices(): Promise<AuthEntity[]> {
    return await AuthEntity.find();
  }

  async getServicesById(id: number): Promise<AuthEntity | null> {
    const Auth = await AuthEntity.findOneBy({ id });
    return Auth;
  }

  async postService(data: AuthEntity): Promise<AuthEntity | null> {
    const Auth = AuthEntity.create(data);
    Auth.save();
    return Auth;
  }

  async putService(id: number, data: AuthEntity): Promise<AuthEntity | null> {
    await AuthEntity.update({ id }, data);
    return this.Auth;
  }

  async deleteService(id: number): Promise<AuthEntity | null> {
    const Auth = await AuthEntity.findOneBy({ id });
    Auth?.remove();
    return Auth;
  }
}
