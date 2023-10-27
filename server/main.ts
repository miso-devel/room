import { Member } from "./controller/members/index.ts";
import { Workshop } from "./controller/workshop/index.ts";
import { cors, Hono, logger, poweredBy } from "./mod.ts";
import { SECRET } from "./secret.ts";

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

Deno.serve(app.fetch);
