import { AuthEntity } from "./auth.entity";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";
import { Response,Request,NextFunction  } from "express";
import { UserEntity } from "../user/user.entity";
import { FindOptionsWhere } from "typeorm";



export class AuthMiddlewares extends BaseMiddlewares<AuthEntity> {
  public secretKey = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;
  constructor() {
    super(AuthEntity);
  }

 
}
