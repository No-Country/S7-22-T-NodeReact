import { Router } from "express";

export class BaseRouter<T> {
  private router = Router();
  private Troutes: T;

  constructor(Trotuer: { new (): T }) {
    this.router;
    this.Troutes = new Trotuer();
    this.routes();
  }

  routes() {}
}
