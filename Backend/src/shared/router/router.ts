import { Router } from "express";

export class BaseRouter<T> {
  public router = Router();
  protected controller: T;

  constructor(Controller: { new (): T }) {
    this.routes()
    this.controller = new Controller()
  }

  routes() {
    
  }
 
}
