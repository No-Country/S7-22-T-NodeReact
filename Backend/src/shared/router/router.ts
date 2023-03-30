import { Router } from "express";

export class BaseRouter<T> {
  public router = Router();
  public controller: T;

  constructor(Controller: { new (): T }, path:string) {
    this.routes(path);
    this.controller = new Controller();
  }

  routes(path: string) {}
}
