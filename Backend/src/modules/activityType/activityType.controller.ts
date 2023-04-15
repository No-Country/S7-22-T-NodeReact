import { Request, Response } from "express";

import { ActivityTypeEntity } from "./activityType.entity";
import { ActivityTypeServices } from "./activityType.services";

export class ActivityTypeController extends ActivityTypeServices {
    constructor() {
        super();
    }

    async getActivityType(req: Request, res: Response){
        try {
            const activityTypes = await this.getServices();
            res.status(200).json({
                status: true,
                activityTypes
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async getActivityTypeById(req: Request, res: Response){
        const { id } = req.params;
        try {
            const activity = await this.getServicesById(Number(id));
            if (!activity)
                return res.status(404).json({
                    status: false,
                    msg: "Activity not found"
                });

            res.status(200).json({
                status: true,
                activity 
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async postActivityType(req: Request, res: Response) {
        const body: ActivityTypeEntity = req.body;
        try {
            const activityType = await this.postService(body);
            res.status(200).json({
                status:true,
                activityType
            });
        }catch(error) {
            res.status(500).json({ msg: error });
        }
    }

    async putActivityType(req: Request, res: Response) {
        const { id } = req.params;
        const body: ActivityTypeEntity = req.body;
        try {
            await this.putService(Number(id), body);
            const activityPut = await this.getServicesById(Number(id));
            res.status(200).json({
                status: activityPut,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async deleteActivityType(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const activityDel = await this.deleteService(Number(id));
            res.status(200).json({
                status: true,
                activityDel
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
}