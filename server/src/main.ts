import { App } from "./app";

async function start() {
  const app = new App();

  await app.init();
};

start();