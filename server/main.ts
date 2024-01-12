import { Hono } from "./deps.ts";
import Auth from "./controller/auth/index.ts";
import Workshop from "./controller/workshops/index.ts";
import User from "./controller/users/index.ts";
import Event from "./controller/events/index.ts";
import { middlewareOptions } from "./middleware.ts";

const app = new Hono();

app.use("*", ...middlewareOptions({ auth: true }));
app.use("/auth/signin", ...middlewareOptions({ auth: false }));

app.route("/auth", Auth);
app.route("/users", User);
app.route("/workshops", Workshop);
app.route("/events", Event);

Deno.serve(app.fetch);
