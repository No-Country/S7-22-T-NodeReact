import { BaseServices } from "../../shared/services/services";
import { SchoolCareersEntity } from "./schoolCareers.entity";

export class SchoolCareersServices extends BaseServices<SchoolCareersEntity>{
    protected schoolCareer = new SchoolCareersEntity();
    constructor() {
        super()
    }

    async getSchoolCareerService(): Promise<SchoolCareersEntity[]> {
        return await SchoolCareersEntity.find()
    }

    async getSchoolCareerByIdService(id: number): Promise<SchoolCareersEntity | null>{
        const schoolCareer = await SchoolCareersEntity.findOneBy({ id })
        return schoolCareer
    }

    async postSchoolCareerService(data: SchoolCareersEntity): Promise<SchoolCareersEntity | null> {
        const schoolCareer = SchoolCareersEntity.create(data)
        schoolCareer.save()
        return schoolCareer
    }

    async putSchoolCareerService(id: number, data:SchoolCareersEntity): Promise<SchoolCareersEntity | null> {
        await SchoolCareersEntity.update({id},data)
        return this.schoolCareer
    }

    async deleteSchoolCareerService(id: number): Promise<SchoolCareersEntity | null> {
        const schoolCareer = await SchoolCareersEntity.findOneBy({ id });
        schoolCareer?.remove()
        return schoolCareer
    }
}