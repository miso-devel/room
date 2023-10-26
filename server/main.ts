import { Member } from "./controller/members/index.ts";
import { Workshop } from "./controller/workshop.ts";
import { Hono } from "./mod.ts";

const app = new Hono();

// members API
app.get("/members", Member.index);
app.get("/members/:id", Member.show);

// workshops API
app.get("/workshops", Workshop.index);
app.get("/workshops/:id", Workshop.show);
app.post("/workshops", Workshop.create);
app.patch("/workshops", Workshop.update);
app.delete("/workshops", Workshop.remove);

Deno.serve(app.fetch);
