import { DB } from "../../db/kv.ts";
import { WrapHandler } from "../../types/common.ts";
import { components } from "../../types/schema.ts";

const prefix = "workshop";

type TWorkshop = components["schemas"]["Workshop"];

const index: WrapHandler<"/workshops"> = async (c) => {
  const workshops = await DB.fetchAll<TWorkshop>({ prefix });
  return c.json(workshops);
};

const show: WrapHandler<"/workshops/:id"> = async (c) => {
  const workshopId = c.req.param("id");
  const workshop = await DB.fetchOne({ prefix, id: workshopId });
  return c.json(workshop.value);
};

const create: WrapHandler<"/workshops"> = async (c) => {
  const data: TWorkshop = await c.req.json();
  const workshop = await DB.createOne<TWorkshop>({ prefix, data });
  return c.json(workshop.value);
};

const update: WrapHandler<"/workshops"> = async (c) => {
  return c.json({});
};

const remove: WrapHandler<"/workshops"> = async (c) => {
  return c.json({});
};

export const Workshop = { index, show, create, update, remove };
