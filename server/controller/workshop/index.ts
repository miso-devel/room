import { DB } from "../../db/db.ts";
import { Env, Handler, TypedResponse } from "../../mod.ts";
import { components } from "../../types/schema.ts";

const prefix = "workshop";

type TWorkshop = components["schemas"]["Workshop"];

const index: Handler<Env, "/woskshops", {}, Promise<TypedResponse>> = async (
  c,
) => {
  const workshops = await DB.fetchAll({ prefix });
  return c.json(workshops);
};

const show: Handler<Env, "/workshops/:id", {}, Promise<TypedResponse>> = async (
  c,
) => {
  const workshopId = c.req.param("id");
  const workshop = await DB.fetchOne({ prefix, id: workshopId });
  return c.json(workshop.value);
};

const create: Handler<Env, "/workshops", {}, Promise<TypedResponse>> = async (
  c,
) => {
  const data: TWorkshop = await c.req.json();
  const workshop = await DB.createOne<TWorkshop>({ prefix, data });
  return c.json(workshop.value);
};

const update: Handler<Env, "/workshops", {}, Promise<TypedResponse>> = async (
  c,
) => {
  return c.json({});
};

const remove: Handler<Env, "/workshops", {}, Promise<TypedResponse>> = async (
  c,
) => {
  return c.json({});
};

export const Workshop = { index, show, create, update, remove };
