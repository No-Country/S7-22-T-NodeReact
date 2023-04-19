import { BaseServices } from "../../shared/services/baseServices";
import { UserEntity } from "../user/user.entity";

export class AuthServices extends BaseServices<UserEntity> {
  constructor() {
    super(UserEntity);
  }
  
  async getUserDetailByEmail(email: string) {
    return await this.repository.findOne({
      where: { email },
      relations: ["role", "commissions", "career"],
    });
  }
}
