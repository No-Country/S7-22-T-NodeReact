import { Request, Response } from "express";

import { SchoolEntity } from "./school.entity";
import { SchoolServices } from "./school.services";

export class SchoolController extends SchoolServices {
  constructor() {
    super();
  }

  async getSchools(req: Request, res: Response) {
    try {
      const schools = await this.getServices();
      res.status(200).json({
        status: true,
        schools,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async getSchoolbyId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const school = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        school,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async postSchool(req: Request, res: Response) {
    const body: SchoolEntity = req.body;
    try {
      const school = await this.postService(body);

      res.status(200).json({
        status: true,
        school,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async putSchool(req: Request, res: Response) {
    const { id } = req.params;
    const body: SchoolEntity = req.body;
    try {
      const schoolUpdate = await this.putService(Number(id), body);
      res.status(200).json({
        status: true,
        schoolUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async deleteSchool(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const school = await this.deleteService(Number(id));

      res.status(200).json({
        status: true,
        school,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
