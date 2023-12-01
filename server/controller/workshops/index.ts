import { DB } from "../../db/kv.ts";
import { Context, Hono } from "../../deps.ts";
import { components } from "../../types/schema.ts";
import {
  addPostRequiredData,
  addUpdateRequiredData,
} from "../../util/addRequiredData.ts";

const prefix = "workshop";

type TWorkshop = components["schemas"]["Workshop"];
type TWorkshopInput = components["schemas"]["WorkshopInput"];

const app = new Hono();

app.get("/", async (c: Context) => {
  const workshops = await DB.fetchAll<TWorkshop>({ prefix });
  return c.json(workshops);
});

app.get("/:id", async (c: Context) => {
  const workshopId = c.req.param("id");
  const workshop = await DB.fetchOne<TWorkshop>({ prefix, id: workshopId });
  return c.json(workshop.value);
});

app.post("/", async (c: Context) => {
  const input: TWorkshopInput = await c.req.json();
  const workshopInput: TWorkshop = addPostRequiredData(input);
  const workshop = await DB.createOne<TWorkshop>({
    prefix,
    data: workshopInput,
  });
  return c.json(workshop.value);
});

app.patch("/", async (c: Context) => {
  const input: TWorkshop = await c.req.json();
  const workshopInput: TWorkshop = addUpdateRequiredData(input);
  const workshop = await DB.updateOne<TWorkshop>({
    prefix,
    data: workshopInput,
  });
  return c.json(workshop.value);
});

app.delete("/", async (c: Context) => {
  const id: string = await c.req.json();
  await DB.deleteOne({ prefix, id });
  return c.json({});
});

export default app;
