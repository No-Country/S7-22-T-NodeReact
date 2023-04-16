import { Request, Response } from "express";

import { StudentActivitiesEntity } from "./studentActivities.entity";
import { StudentActivitiesServices } from "./studentActivities.services";

export class studentActivitiesController extends StudentActivitiesServices  {
    constructor() {
        super();
    }

    async getStudentActivities(req: Request, res: Response){
        try {
            const studentActivities = await this.getServices();
            res.status(200).json({
                status: true,
                studentActivities
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async getStudentActivitiesbyId(req: Request, res: Response){
        const { id } = req.params;
        try {
            const studentActivitiesId = await this.getServicesById(Number(id));
            if (!studentActivitiesId )
                return res.status(404).json({
                    status: false,
                    msg: "Student activity not found"
                });

            res.status(200).json({
                status: true,
                studentActivitiesId 
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async postStudentActivity(req: Request, res: Response) {
        const body: StudentActivitiesEntity = req.body;
        try {
            const studentActivity = await this.postService(body);
            res.status(200).json({
                status:true,
                studentActivity
            });
        }catch(error) {
            res.status(500).json({ msg: error });
        }
    }

    async putStudentActivities(req: Request, res: Response) {
        const { id } = req.params;
        const body: StudentActivitiesEntity = req.body;
        try {
            await this.putService(Number(id), body);
            const studentActivityPut = await this.getServicesById(Number(id));
            res.status(200).json({
                status: true,
                result: studentActivityPut,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async deleteStudentActivities(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const studentActivitiesDel = await this.deleteService(Number(id));
            res.status(200).json({
                status: true,
                studentActivitiesDel 
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
}