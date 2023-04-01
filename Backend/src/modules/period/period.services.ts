import { BaseServices } from "../../shared/services/services";
import { PeriodEntity } from "./period.entity";

export class PeriodServices extends BaseServices<PeriodEntity> {
  protected period = new PeriodEntity();
  constructor() {
    super();
  }

  async getServices(): Promise<PeriodEntity[]> {
    return await PeriodEntity.find();
  }

  async getServicesById(id: number): Promise<PeriodEntity | null> {
    const user = await PeriodEntity.findOneBy({ id });
    return user;
  }

  async postService(data: PeriodEntity): Promise<PeriodEntity | null> {
    const user = PeriodEntity.create(data);
    user.save();
    return user;
  }

  async putService(id: number, data: PeriodEntity): Promise<PeriodEntity | null> {
    await PeriodEntity.update({ id }, data);
    return this.period;
  }

  async deleteService(id: number): Promise<PeriodEntity | null> {
    const user = await PeriodEntity.findOneBy({ id });
    user?.remove();
    return user;
  }
}
