import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Hello world!"));

export default {
  port: 3000,
  fetch: app.fetch,
};
