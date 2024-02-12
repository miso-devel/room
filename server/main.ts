import { Hono } from "./deps.ts";
import Auth from "./controller/auth/index.ts";
import Workshop from "./controller/workshops/index.ts";
import User from "./controller/users/index.ts";
import Event from "./controller/events/index.ts";
import { middlewareOptions } from "./middleware.ts";

export const app = new Hono();

app.get("/health", (c) => c.json({ message: "Health" }));

app.use("/auth/signin", ...middlewareOptions({ auth: false }));
app.use("/auth/signout", ...middlewareOptions({ auth: true }));
app.use("/auth/token", ...middlewareOptions({ auth: false }));
app.use("/auth/token/check", ...middlewareOptions({ auth: true }));
app.route("/auth", Auth);

app.use("/users/*", ...middlewareOptions({ auth: true }));
app.route("/users", User);

app.use("/workshops/*", ...middlewareOptions({ auth: true }));
app.route("/workshops", Workshop);

app.use("/events/*", ...middlewareOptions({ auth: true }));
app.route("/events", Event);

Deno.serve(app.fetch);
