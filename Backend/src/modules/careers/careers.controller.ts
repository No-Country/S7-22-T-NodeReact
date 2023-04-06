import { Request, Response } from "express";

import { CareersEntity } from "./careers.entity";
import { CareersServices } from "./careers.services";

export class CareersController extends CareersServices {
    constructor() {
        super();
    }

    async getCareers(req: Request, res: Response) {
        try {
            const careers = await this.getServices();
            res.status(200).json({
                status: true,
                careers
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async getCareerById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const career = await this.getServicesById(Number(id));
            if (!career)
                return res.status(404).json({
                    status: false,
                    msg: "Career not found"
                });

            res.status(200).json({
                status: true,
                career
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async postCareer(req: Request, res: Response) {
        const body: CareersEntity = req.body;
        try {
            const career = await this.postService(body);
            res.status(200).json({
                status: true,
                career
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async putCareer(req: Request, res: Response) {
        const { id } = req.params;
        const body: CareersEntity = req.body;
        try {
           

            await this.putService(Number(id), body);
            const career = await this.getServicesById(Number(id));
            res.status(200).json({
                status: true,
                result: career,
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }

    async deleteCareer(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const career = await this.deleteService(Number(id));
            res.status(200).json({
                status: true,
                career
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    }
}