import { BaseServices } from "../../shared/services/services";
import { SubjectsEntity } from "./subjects.entity";

export class SubjectService extends BaseServices<SubjectsEntity>{
    protected subject = new SubjectsEntity();
    constructor(){
        super();
    }

    async getSubjectsService(): Promise<SubjectsEntity[]>{
        return await SubjectsEntity.find();
    }

    async getSubjectsbyIdService(id: number): Promise<SubjectsEntity | null>{
        const subject = await SubjectsEntity.findOneBy({ id });
        return subject;
    }

    async postSubjectsService(data:SubjectsEntity): Promise<SubjectsEntity | null>{
        const subject = SubjectsEntity.create(data);
        subject.save();
        return subject;  
    }

    async putSubjectsService(id: number, data:SubjectsEntity): Promise<SubjectsEntity | null>{
        await SubjectsEntity.update({id},data);
        return this.subject;
    }

    async deleteSubjectsService(id: number): Promise<SubjectsEntity | null>{
        const subject = await SubjectsEntity.findOneBy({ id });
        subject?.remove();
        return subject;
    }
}