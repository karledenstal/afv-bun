import app from "./server";
import { describe, it, expect } from "bun:test";

describe("server.ts", () => {
  it("should return 200 response", async () => {
    const req = new Request("http://localhost/");
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});
