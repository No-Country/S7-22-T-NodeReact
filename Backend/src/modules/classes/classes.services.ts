import { BaseServices } from "../../shared/services/services";
import { ClassesEntity } from "./classes.entity";

export class ClassServices extends BaseServices<ClassesEntity> {
  protected class = new ClassesEntity();

  constructor() {
    super();
  }

  async getServices(): Promise<ClassesEntity[]> {
    return await ClassesEntity.find();
  }

  async getServicesById(id: number): Promise<ClassesEntity | null> {
    const singleClass = ClassesEntity.findOneBy({ id });
    return singleClass;
  }

  async postService(data: ClassesEntity): Promise<ClassesEntity | null> {
    const singleClass = ClassesEntity.create(data);
    singleClass.save();
    return singleClass;
  }

  async putService(id: number, data: ClassesEntity): Promise<ClassesEntity | null> {
    await ClassesEntity.update({ id }, data);
    return this.class;
  }

  async deleteService(id: number): Promise<ClassesEntity | null> {
    const singleClass = await ClassesEntity.findOneBy({ id });
    singleClass?.remove();
    return singleClass;
  }
}
