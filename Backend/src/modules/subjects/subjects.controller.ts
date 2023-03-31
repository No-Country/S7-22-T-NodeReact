import { Request, Response } from "express";
import { SubjectsEntity } from "./subjects.entity";
import { SubjectService } from "./subjects.services";

export class SubjectsController extends SubjectService{
    constructor(){
        super();
    }

    async getSubjects(req:Request, res:Response){
        try{
            const subject = await this.getSubjectsService();
            res.status(200).json({
                status:true,
                subject
            });
        }catch(error){
            res.status(200).json({ msg: error });
        }
    }

    async getSubjectsById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const career = await this.getSubjectsbyIdService(Number(id));
            if (!career)
                return res.status(404).json({
                    status: false,
                    msg: "Subject not found"
                });

            res.status(200).json({
                status: true,
                career
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async postSubjects(req:Request, res:Response){
        const body: SubjectsEntity = req.body;
        try{
            const subject = await this.postSubjectsService(body);
            res.status(200).json({
                status:true,
                subject
            });
        }catch(error){
            res.status(500).json({ msg: error });
        }
    }

    async putSubjects(req: Request, res: Response) {
        const { id } = req.params;
        const body: SubjectsEntity = req.body;
        try {
            const subject = await this.getSubjectsbyIdService(Number(id));
            if (!subject)
                return res.status(404).json({
                    status: false,
                    msg: "Subject not found"
                });

            await this.putSubjectsService(Number(id), body);
            const subject2 = await this.getSubjectsbyIdService(Number(id));
            res.status(200).json({
                status: true,
                subject2,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async deleteSubjects(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const subject = await this.getSubjectsbyIdService(Number(id));
            await this.deleteSubjectsService(Number(id));
            res.status(200).json({
                status: true,
                subject
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
}