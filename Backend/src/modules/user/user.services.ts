import { BaseServices } from "../../shared/services/services";
import { BaseServices2 } from "../../shared/services/services2";
import { UserEntity } from "./user.entity";

export class UserServices extends BaseServices2<UserEntity> {
  // protected user = new UserEntity();
  constructor() {
    super(UserEntity);
  }


  // async getServices(): Promise<UserEntity[]> {
  //   return await UserEntity.find();
  // }

  // async getServicesById(id: number): Promise<UserEntity | null> {
  //   const user = await UserEntity.findOneBy({ id });
  //   return user;
  // }

  // async postService(data: UserEntity): Promise<UserEntity | null> {
  //   const user = UserEntity.create(data);
  //   user.save();
  //   return user;
  // }

  // async putService(id: number, data: UserEntity): Promise<UserEntity | null> {
  //   await UserEntity.update({ id }, data);
  //   return this.user;
  // }

  // async deleteService(id: number): Promise<UserEntity | null> {
  //   const user = await UserEntity.findOneBy({ id });
  //   user?.remove();
  //   return user;
  // }
}
