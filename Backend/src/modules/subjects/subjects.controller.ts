import { Request, Response } from "express";

import { SubjectService } from "./subjects.services";
import { SubjectsEntity } from "./subjects.entity";

export class SubjectsController extends SubjectService {
  constructor() {
    super();
  }

  async getSubjects(req: Request, res: Response) {
    try {
      const subject = await this.getServices_RelationAll();
      res.status(200).json({
        status: true,
        subject,
      });
    } catch (error) {
      res.status(200).json({ msg: error });
    }
  }

  async getSubjectsById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const subject = await this.getServices_RelationBySchoolId(parseInt(id));
      if (!subject)
        return res.status(404).json({
          status: false,
          msg: "Subject not found",
        });

      res.status(200).json({
        status: true,
        result: subject,
      });
    } catch (error) {
      if (error instanceof Error) return res.status(500).json({ msg: error.message });
    }
  }

  async postSubjects(req: Request, res: Response) {
    const body: SubjectsEntity = req.body;
    try {
      const subject = await this.postService(body);
      res.status(200).json({
        status: true,
        subject,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async putSubjects(req: Request, res: Response) {
    const { id } = req.params;
    const body: SubjectsEntity = req.body;
    try {
      const subject = await this.putService(Number(id), body);

      res.status(200).json({
        status: true,
        subject,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async deleteSubjects(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const subject = await this.deleteService(Number(id));

      res.status(200).json({
        status: true,
        subject,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
