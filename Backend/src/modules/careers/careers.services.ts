import { BaseServices } from "../../shared/services/services";
import { CareersEntity } from "./careers.entity";

export class CareersServices extends BaseServices<CareersEntity>{
    protected career = new CareersEntity();
    constructor() {
        super();
    }

    async getCareerService(): Promise<CareersEntity[]> {
        return await CareersEntity.find();
    }

    async getCareerByIdService(id: number): Promise<CareersEntity | null>{
        const career = await CareersEntity.findOneBy({ id });
        return career;
    }

    async postCareerService(data: CareersEntity): Promise<CareersEntity | null> {
        const career = CareersEntity.create(data);
        career.save();
        return career;
    }

    async putCareerService(id: number, data:CareersEntity): Promise<CareersEntity | null> {
        await CareersEntity.update({id},data);
        return this.career;
    }

    async deleteCareerService(id: number): Promise<CareersEntity | null> {
        const career = await CareersEntity.findOneBy({ id });
        career?.remove();
        return career;
    }
}