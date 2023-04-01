import { Request, Response } from "express";

import { PeriodEntity } from "./period.entity";
import { PeriodServices } from "./period.services";
import { randomUUID } from "crypto";

export class PeriodController extends PeriodServices {
  constructor() {
    super();
  }

  async getAll(req: Request, res: Response) {
    try {
      const periods = await this.getServices();

      res.status(200).json({
        status: true,
        periods,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const period = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        period,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async post(req: Request, res: Response) {
    const body: PeriodEntity = req.body;
    try {
      const period = await this.postService(body);

      res.status(200).json({
        status: true,
        period,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async put(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      await this.putService(Number(id), body);
      const periodUpdate = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        periodUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const period = await this.getServicesById(Number(id));

      await this.deleteService(Number(id));
      res.status(200).json({
        status: true,
        period,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
