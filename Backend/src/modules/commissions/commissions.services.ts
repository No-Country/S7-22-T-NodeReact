import { BaseServices } from "../../shared/services/baseServices";
import { CommissionsEntity } from "./commissions.entity";

export class CommissionsServices extends BaseServices<CommissionsEntity> {
  constructor() {
    super(CommissionsEntity);
  }
}
