import { Request, Response } from "express";

import { CourseEntity } from "./course.entity";
import { CourseServices } from "./course.services";

export class CourseController extends CourseServices {
  constructor() {
    super();
  }

  async getAll(req: Request, res: Response) {
    try {
      const Courses = await this.getServices();

      res.status(200).json({
        status: true,
        Courses,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const Course = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        Course,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async post(req: Request, res: Response) {
    const body: CourseEntity = req.body;
    try {
      const Course = await this.postService(body);

      res.status(200).json({
        status: true,
        Course,
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
      const CourseUpdate = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        CourseUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const Course = await this.getServicesById(Number(id));

      await this.deleteService(Number(id));
      res.status(200).json({
        status: true,
        Course,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
