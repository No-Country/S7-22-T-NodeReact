import { BaseServices } from "../../shared/services/baseServices";
import { SubjectsEntity } from "./subjects.entity";

export class SubjectService extends BaseServices<SubjectsEntity> {
  constructor() {
    super(SubjectsEntity);
  }
}
