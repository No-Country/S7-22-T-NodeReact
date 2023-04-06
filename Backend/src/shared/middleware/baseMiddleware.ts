import { BaseEntity, EntityTarget, FindOptionsWhere, Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";

import { AppDataSource } from "../../config/db/postgreSql";

export abstract class BaseMiddlewares<T extends BaseEntity> {

  public repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(entity);
  }

  async checkId(req: Request, res: Response, nex: NextFunction) {
    const { id } = req.params;
    try {
      const idCheck = await this.repository.findOneBy({ id: Number(id) } as unknown as FindOptionsWhere<T>);
      if (!idCheck)
        return res.status(404).json({
          status: false,
          msg: "ID not found",
        });

      return nex();
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
