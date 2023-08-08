import { App } from "./app";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";

async function start() {
  const logger = new LoggerService();

  const app = new App(
    logger,
    new UserController(logger)
  );

  await app.init();
};

start();