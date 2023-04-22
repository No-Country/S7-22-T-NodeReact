import { BaseServices } from "../../shared/services/baseServices";
import { CommissionsEntity } from "./commissions.entity";
import { UserEntity } from "../user/user.entity";

export class CommissionsServices extends BaseServices<CommissionsEntity> {
  constructor() {
    super(CommissionsEntity);
  }

  async getUsersCommissionById(id: number) {
    return await this.repository.find({ where: { id }, relations: ["users"] });
  }

  async getCommissionsFromAdmin() {
    return await this.repository.find({ relations: ["users", "classes"] });
  }

  async addUserToCommission(userId: string, commissionId: number) {
    const user = await (await this.getRepository(UserEntity)).findOneBy({ userId });
    const commission = await this.repository.findOne({
      where: { id: commissionId },
      relations: ["users"],
    });

    if (commission && user) {
      commission.users.push(user);
      await commission.save();
    }

    return commission;
  }
}
