import { Request, Response } from "express";
import { CommissionsEntity } from "./commissions.entity";
import { CommissionsServices } from "./commissions.services";

export class CommissionsController extends CommissionsServices {
    constructor() {
        super();
    }

    async getCommissions(req: Request, res: Response) {
        try {
            const commissions = await this.getCommissionsService();
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
            const commissions = await this.getCommissionsByIdService(Number(id));
            if (!commissions)
                return res.status(404).json({
                    status: false,
                    msg: "Commission not found"
                });

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
            const commissions = await this.postCommissionsService(body);
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
            await this.putCommissionsService(Number(id), body);
            const commissionsUpdate = await this.getCommissionsByIdService(Number(id));
                if (!commissionsUpdate)
                    return res.status(404).json({
                        status: false,
                        msg: "Commission not found"
                    });
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
            const commissions = await this.getCommissionsByIdService(Number(id));
            await this.deleteCommissionsService(Number(id));
            res.status(200).json({
                status: true,
                commissions,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
}