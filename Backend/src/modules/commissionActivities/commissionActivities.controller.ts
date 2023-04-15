import { Request, Response } from "express";

import { CommissionsActivitiesEntity } from "./commissionActivities.entity";
import { CommissionActivitiesServices } from "./commissionActivities.services";

export class CommissionActivityController extends CommissionActivitiesServices {
    constructor() {
        super();
    }

    async getCommissionActivities(req: Request, res: Response){
        try {
            const commisionActivities = await this.getServices();
            res.status(200).json({
                status: true,
                commisionActivities
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async getCommissionActivitybyId(req: Request, res: Response){
        const { id } = req.params;
        try {
            const commissionActivityId = await this.getServicesById(Number(id));
            if (!commissionActivityId)
                return res.status(404).json({
                    status: false,
                    msg: "Commission activity not found"
                });

            res.status(200).json({
                status: true,
                commissionActivityId
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async postCommissionActivities(req: Request, res: Response) {
        const body: CommissionsActivitiesEntity = req.body;
        try {
            const commissionActivity = await this.postService(body);
            res.status(200).json({
                status:true,
                commissionActivity
            });
        }catch(error) {
            res.status(500).json({ msg: error });
        }
    }

    async putCommissionActivities(req: Request, res: Response) {
        const { id } = req.params;
        const body: CommissionsActivitiesEntity = req.body;
        try {
            await this.putService(Number(id), body);
            const commissionActivityPut = await this.getServicesById(Number(id));
            res.status(200).json({
                status: true,
                result: commissionActivityPut,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async deleteCommissionActivities(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const commissionActivityDel = await this.deleteService(Number(id));
            res.status(200).json({
                status: true,
                commissionActivityDel
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
}