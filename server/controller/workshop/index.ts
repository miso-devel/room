import { DB } from "../../db/db.ts";
import { Env, Handler } from "../../mod.ts";
import { components } from "../../types/schema.ts";

const prefix = "workshop";

type TWorkshop = components["schemas"]["Workshop"];

const index: Handler<Env, "/woskshops", {}, Promise<Response>> = async (c) => {
  return c.json({});
};

const show: Handler<Env, "/workshops/:id", {}, Promise<Response>> = async (
  c,
) => {
  return c.json({});
};

const create: Handler<Env, "/workshops", {}, Promise<Response>> = async (c) => {
  const data: TWorkshop = await c.req.json();
  const workshop = await DB.createOne<TWorkshop>({ prefix, data });
  return c.json(workshop.value);
};

const update: Handler<Env, "/workshops", {}, Promise<Response>> = async (c) => {
  return c.json({});
};

const remove: Handler<Env, "/workshops", {}, Promise<Response>> = async (c) => {
  return c.json({});
};

export const Workshop = { index, show, create, update, remove };
