export class BaseServices<T> {
  public entityArray: T[];
  public entity: T;

  constructor() {}

  async getServices(): Promise<T[]> {
    return this.entityArray;
  }

  async getServicesById(id: number): Promise<T | null> {
    return this.entity;
  }

  async postService(data: T): Promise<T | null> {
    return this.entity;
  }
  async putService(id: number, data: T): Promise<T | null> {
    return this.entity;
  }
  async deleteService(id: number): Promise<T | null> {
    return this.entity;
  }
}
