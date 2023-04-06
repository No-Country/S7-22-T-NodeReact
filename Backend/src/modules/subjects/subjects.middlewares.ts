import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { SubjectsEntity } from "./subjects.entity";

export class SubjectsMiddleware extends BaseMiddlewares<SubjectsEntity> {
  constructor() {
    super(SubjectsEntity);
  }  
}