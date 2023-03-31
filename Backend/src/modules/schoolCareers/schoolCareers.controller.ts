import { Request, Response } from "express";

import { SchoolCareersEntity } from "./schoolCareers.entity";
import { SchoolCareersServices } from "./schoolCareers.services";

export class SchoolCareersController extends SchoolCareersServices {
  constructor() {
    super();
  }

  async getSchoolCareers(req: Request, res: Response) {
    try {
      const schoolCareers = await this.getSchoolCareerService();
      res.status(200).json({
        status: true,
        schoolCareers,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async getSchoolCareersById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const career = await this.getSchoolCareerByIdService(Number(id));

      res.status(200).json({
        status: true,
        career,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async postSchoolCareers(req: Request, res: Response) {
    const body: SchoolCareersEntity = req.body;
    try {
      const career = await this.postSchoolCareerService(body);
      res.status(200).json({
        status: true,
        career,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async putSchoolCareers(req: Request, res: Response) {
    const { id } = req.params;
    const body: SchoolCareersEntity = req.body;
    try {
      await this.putSchoolCareerService(Number(id), body);
      const careerUpdate = await this.getSchoolCareerByIdService(Number(id));
      res.status(200).json({
        status: true,
        careerUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async deleteSchoolCareers(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const career = await this.getSchoolCareerByIdService(Number(id));
      await this.deleteSchoolCareerService(Number(id));
      res.status(200).json({
        status: true,
        career,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
