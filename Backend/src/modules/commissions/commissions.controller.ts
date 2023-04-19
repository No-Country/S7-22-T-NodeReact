import { Request, Response } from "express";

import { CommissionsEntity } from "./commissions.entity";
import { CommissionsServices } from "./commissions.services";

export class CommissionsController extends CommissionsServices {
    constructor() {
        super();
    }

    async getCommissions(req: Request, res: Response) {
        try {
            const commissions = await this.getServices();
            res.status(200).json({
                status: true,
                commissions,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
    
    async getCommissionsAdmin(req: Request, res: Response) {
        try {
            const commissions = await this.getCommissionsFromAdmin();
            res.status(200).json({
                status: true,
                commissions,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async getCommissionsById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const commissions = await this.getServicesById(Number(id));
            
            res.status(200).json({
                status: true,
                commissions,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async postCommissions(req: Request, res: Response) {
        const body: CommissionsEntity = req.body;
        try {
            const commissions = await this.postService(body);
            res.status(200).json({
                status: true,
                commissions,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
    
   

    async putCommissions(req: Request, res: Response) {
        const { id } = req.params;
        const body: CommissionsEntity = req.body;
        try {
            const commissionsUpdate = await this.putService(Number(id), body);
           
            res.status(200).json({
                status: true,
                commissionsUpdate,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async deleteCommissions(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const commissions = await this.getServicesById(Number(id));
            await this.deleteService(Number(id));
            res.status(200).json({
                status: true,
                commissions,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async addUserCommission(req: Request, res: Response) {
        const {userId, commissionId} = req.body;
        try {
            const commissions = await this.addUserToCommission(userId, Number(commissionId));
            res.status(200).json({
                status: true,
                commissions,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

}