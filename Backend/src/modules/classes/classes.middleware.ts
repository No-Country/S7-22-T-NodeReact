import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { ClassesEntity } from "./classes.entity";

export class ClassesMiddlewares extends BaseMiddlewares<ClassesEntity> {
  constructor() {
    super(ClassesEntity);
  }
}
