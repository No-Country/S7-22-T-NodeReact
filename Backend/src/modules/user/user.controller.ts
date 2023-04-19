import { Request, Response } from "express";

import { UserEntity } from "./user.entity";
import { UserServices } from "./user.services";
import crypto from "crypto";
import { hashPassword } from "./utils/passwordEncrypt.utils";
import { mailGenerator } from "./utils/mailGenerator.utils";

export class UserController extends UserServices {
  constructor() {
    super();
  }

  // -- GET ENDPOINT METHODS -------------------------------------------
  async getAll(req: Request, res: Response) {
    try {
      // const users = await this.getServices();

      const users = await this.getUsersWithRoles();
      res.status(200).json({
        status: true,
        results: users,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async getAllRelations(req: Request, res: Response) {
    try {
      const users = await this.getService_RelationAll();

      res.status(200).json({
        status: true,
        results: users,
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
      const user = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        result: user,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async getByUserId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.getServicesById(Number(id));

      res.status(200).json({
        status: true,
        result: user,
        // commission
        // career
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  // -- POST ENDPOINT METHODS -------------------------------------------
  /**
   * @description This "First User Registration" endpoint is intended to auto generate the email based on the user's name and password using their DNI, so the user must change their password on the first login. This is because that only admins can register users to the system.
   */
  async post(req: Request, res: Response) {
    const body = req.body;
    try {
      body.email = mailGenerator(body.name, body.lastName);
      body.password = await hashPassword(body.dni);
      body.userId = crypto.randomUUID();
      const role = await this.getRole(Number(body.role));
      const career = await this.getCareer(Number(body.career));
      body.role = role;

      const user = await this.postService(body);

      if (!user) throw new Error("Couldn't create the new User!");

      if (body.role === 3) {
        body.career = career;
        const userCareer = await this.addUserToCommission(user, body.career);
      }

      res.status(200).json({
        status: true,
        result: user,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  // -- PUT ENDPOINT METHODS -------------------------------------------
  async put(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      await this.putService(parseInt(id), body);
      const userUpdate = await this.getServicesById(parseInt(id));

      res.status(200).json({
        status: true,
        result: userUpdate,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async putFromUserId(req: Request, res: Response) {
    const { userIdReq } = req.params;
    const { id, userId, password, createdAt, updatedAt, ...body } = req.body;
    try {
      const val = await this.putServiceFromUserId(userIdReq, body);
      console.log(val);
      const userUpdate = await this.getServicesByUserId(userIdReq);

      res.status(200).json({
        status: true,
        result: userUpdate,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  // -- DELETE ENDPOINT METHODS -------------------------------------------

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.getServicesById(parseInt(id));

      await this.deleteService(parseInt(id));
      res.status(200).json({
        status: true,
        user,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async deleteFromUserId(req: Request, res: Response) {
    const { userIdReq } = req.params;
    try {
      const user = await this.getServicesByUserId(userIdReq);

      await this.deleteServiceByUserId(userIdReq);
      res.status(200).json({
        status: true,
        result: user,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async postAddUser(req: Request, res: Response) {
    const body = req.body;

    try {
      body.email = mailGenerator(body.name, body.lastName);
      body.password = await hashPassword(body.dni);
      body.userId = crypto.randomUUID();
      const role = await this.getRole(Number(body.role));
      const career = await this.getCareer(Number(body.career));

      body.role = role;
      body.career = career;
      const user = await this.postService(body);

      if (!user) throw new Error("Couldn't create the new User!");

      if (body.role.id === 3 && career?.id) {
        await this.addUsersToClassesCommissions(user, career.id);
      }

      res.status(200).json({
        status: true,
        result: user,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
  async addStudentStatusClase(req: Request, res: Response) {
    const { userId, claseId, status } = req.body;

    try {
      const user = await this.assignStatusToClaseStudent(userId, Number(claseId), status);

      res.status(200).json({
        status: true,
        result: user,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
  async getStudentStatusClase(req: Request, res: Response) {
    const { userId } = req.body;

    try {
      const user = await this.statusToClaseStudent(userId);

      res.status(200).json({
        status: true,
        result: user,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
}
