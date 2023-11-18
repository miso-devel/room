import { SECRET } from "./constants/secret.ts";
import { Event as _Event } from "./controller/events/index.ts";
import { Member } from "./controller/members/index.ts";
import { Workshop } from "./controller/workshops/index.ts";
import { cors, Hono, logger, poweredBy } from "./deps.ts";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: [SECRET.CLIENT_URL as string],
    allowHeaders: [
      "Origin",
      "Content-Type",
      "Authorization",
      "X-Custom-Header",
      "Access-Control-Allow-Origin",
    ],
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
  }),
  logger(),
  poweredBy(),
);

// members API
app.get("/members", Member.index);
app.get("/members/:id", Member.show);

// workshops API
app.get("/workshops", Workshop.index);
app.get("/workshops/:id", Workshop.show);
app.post("/workshops", Workshop.create);
app.patch("/workshops", Workshop.update);
app.delete("/workshops", Workshop.remove);

// events API
app.get("/events", _Event.index);
app.get("/events/:id", _Event.show);
app.post("/events", _Event.create);
app.patch("/events", _Event.update);
app.delete("/events", _Event.remove);

Deno.serve(app.fetch);
