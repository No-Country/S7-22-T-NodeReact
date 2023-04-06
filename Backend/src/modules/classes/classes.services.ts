import { BaseServices } from "../../shared/services/baseServices";
import { ClassesEntity } from "./classes.entity";

export class ClassServices extends BaseServices<ClassesEntity> {
  constructor() {
    super(ClassesEntity);
  }
}
