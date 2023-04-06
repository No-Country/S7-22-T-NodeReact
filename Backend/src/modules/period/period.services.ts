import { BaseServices } from "../../shared/services/baseServices";
import { PeriodEntity } from "./period.entity";

export class PeriodServices extends BaseServices<PeriodEntity> {
  protected period = new PeriodEntity();
  constructor() {
    super(PeriodEntity);
  }

  
}
