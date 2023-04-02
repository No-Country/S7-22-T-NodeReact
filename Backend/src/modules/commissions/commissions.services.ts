import { BaseServices } from "../../shared/services/services";
import { CommissionsEntity } from "./commissions.entity";

export class CommissionsServices extends BaseServices<CommissionsEntity>{
    protected commissions = new CommissionsEntity();
    constructor(){
        super();
    }

    async getCommissionsService(): Promise<CommissionsEntity[]>{
        return await CommissionsEntity.find();
    }

    async getCommissionsByIdService(id: number): Promise<CommissionsEntity | null>{
        const commissions = await CommissionsEntity.findOneBy({ id });
        return commissions;
    }

    async postCommissionsService(data: CommissionsEntity): Promise<CommissionsEntity | null>{
        const commissions = CommissionsEntity.create(data);
        commissions.save();
        return commissions;
    }

    async putCommissionsService(id:number, data:CommissionsEntity): Promise<CommissionsEntity | null>{
        await CommissionsEntity.update({ id }, data);
        return this.commissions;
    }

    async deleteCommissionsService(id: number): Promise<CommissionsEntity | null> {
        const commissions = await CommissionsEntity.findOneBy({ id });
        commissions?.remove();
        return commissions;
      }
}