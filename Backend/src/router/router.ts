import { Router } from "express";

export class BaseRouter<T> {
  private router = Router();
  private controller: T;

  constructor(Tcontroller: { new (): T }) {
    this.router;
    this.controller = new Tcontroller();
    this.routes();
  }

  routes() {}
}
