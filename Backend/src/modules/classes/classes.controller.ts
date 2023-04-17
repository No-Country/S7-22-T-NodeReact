import { Request, Response } from "express";

import { ClassServices } from "./classes.services";

export class ClassesController extends ClassServices {
  constructor() {
    super();
  }

  async getAll(req: Request, res: Response) {
    try {
      const classes = await this.getServices();

      res.status(200).json({
        status: true,
        classes,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const singleClass = await this.getServicesById(parseInt(id));
      const commissions = await this.getCommissionsInClase(Number(id));
     

      res.status(200).json({
        status: true,
        singleClass,
        commissions
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async createClass(req: Request, res: Response) {
    const body = req.body;
    try {
      const newClass = await this.postService(body);
      res.status(200).json({
        status: true,
        newClass,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async updateClass(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;

    try {
      await this.putService(parseInt(id), body);
      const classUpdated = await this.getServicesById(parseInt(id));

      res.status(200).json({
        status: true,
        classUpdated,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async deleteClass(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const classToDelete = await this.getServicesById(parseInt(id));

      await this.deleteService(parseInt(id));

      res.status(200).json({
        status: true,
        classToDelete,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async addCommissionsToClasses(req: Request, res: Response) {
    const { commissionId, claseId} = req.body;
    try {
      console.log(req.body);
      const commission = await this.getCommission(commissionId);
      const clase = await this.addCommissionToClase(commission!, claseId);

      res.status(200).json({
        status: true,
        clase,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  

  
}
