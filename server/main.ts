import { Hono } from "https://deno.land/x/hono@v3.7.2/mod.ts";
import { Member } from "./controller/Members.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

app.get("/members", async (c) => {
  const members = Member.index();
});

app.get("/members/:id", async (c) => {
  const member = Member.show();
});

app.get("/workshops", async (c) => {});
app.get("/workshops/:id", async (c) => {});
app.post("/workshops", async (c) => {});
app.patch("/workshops", async (c) => {});
app.delete("/workshops", async (c) => {});

Deno.serve(app.fetch);
