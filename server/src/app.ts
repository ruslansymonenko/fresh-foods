import express, { Express } from "express";
import { Server } from 'http';

export class App {
  app: Express;
  server: Server;
  port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
  }

  public async init() {
    this.server = this.app.listen(this.port);
    console.log(`Server was started on the port ${this.port} . . .`);
  }
}
