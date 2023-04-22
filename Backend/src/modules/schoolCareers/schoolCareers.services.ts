import { BaseServices } from "../../shared/services/baseServices";
import { SchoolCareersEntity } from "./schoolCareers.entity";

export class SchoolCareersServices extends BaseServices<SchoolCareersEntity> {
  constructor() {
    super(SchoolCareersEntity);
  }
}
