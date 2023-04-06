import { BaseServices } from "../../shared/services/baseServices";
import { SchoolEntity } from "./school.entity";

export class SchoolServices extends BaseServices<SchoolEntity> {
  constructor() {
    super(SchoolEntity);
  }

}
