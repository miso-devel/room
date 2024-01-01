import { SECRET } from "./constants/secret.ts";
import { cors, Hono, logger, poweredBy } from "./deps.ts";
import Auth from "./controller/auth/index.ts";
import Workshop from "./controller/workshops/index.ts";
import Member from "./controller/members/index.ts";
import Event from "./controller/events/index.ts";

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

app.route("/auth", Auth);
app.route("/members", Member);
app.route("/workshops", Workshop);
app.route("/events", Event);

Deno.serve(app.fetch);
