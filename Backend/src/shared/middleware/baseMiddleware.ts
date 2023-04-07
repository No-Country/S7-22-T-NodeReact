import { BaseEntity, EntityTarget, FindOptionsWhere, Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";

import { AppDataSource } from "../../config/db/postgreSql";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";
import { AuthEntity, UserEntity } from "../../modules";

export abstract class BaseMiddlewares<T extends BaseEntity> {
  public secretKey = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;
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

  async checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header("set-token");
    if (!token) {
      return res.status(403).json({ error: "User not authenticated" });
    }

    try {
      const { userId } = jwt.verify(token, this.secretKey) as unknown  as UserEntity;
      const user = await this.repository.findOne({ where: { userId } as unknown as FindOptionsWhere<T> });
      if (!user) {
        return res.status(403).json({
          status: false,
          result: "User not found"
        });
      }
      // Llamada a next() para continuar con el siguiente middleware o ruta
      next();
    } catch (error) {
      // Manejo de errores en caso de fallo en la verificación del token
      return res.status(403).json({ error: "Invalid token" });
    }
  }
}
