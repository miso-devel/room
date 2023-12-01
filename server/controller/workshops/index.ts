import { PREFIX_MAP } from "../../constants/prefix.ts";
import { DB } from "../../db/kv.ts";
import { Context, Hono } from "../../deps.ts";
import { schema } from "../../types/common.ts";
import {
  addPostRequiredData,
  addUpdateRequiredData,
} from "../../util/addRequiredData.ts";

type TWorkshop = schema["Workshop"];
type TWorkshopInput = schema["WorkshopInput"];

const app = new Hono();

app.get("/", async (c: Context) => {
  const workshops = await DB.fetchAll<TWorkshop>({
    prefix: PREFIX_MAP["workshop"],
  });
  return c.json(workshops);
});

app.get("/:id", async (c: Context) => {
  const workshopId = c.req.param("id");
  const workshop = await DB.fetchOne<TWorkshop>({
    prefix: PREFIX_MAP["workshop"],
    id: workshopId,
  });
  return c.json(workshop.value);
});

app.post("/", async (c: Context) => {
  const input: TWorkshopInput = await c.req.json();
  const workshopInput: TWorkshop = addPostRequiredData(input);
  const workshop = await DB.createOne<TWorkshop>({
    prefix: PREFIX_MAP["workshop"],
    data: workshopInput,
  });
  return c.json(workshop.value);
});

app.patch("/", async (c: Context) => {
  const input: TWorkshop = await c.req.json();
  const workshopInput: TWorkshop = addUpdateRequiredData(input);
  const workshop = await DB.updateOne<TWorkshop>({
    prefix: PREFIX_MAP["workshop"],
    data: workshopInput,
  });
  return c.json(workshop.value);
});

app.delete("/", async (c: Context) => {
  const id: string = await c.req.json();
  await DB.deleteOne({ prefix: PREFIX_MAP["workshop"], id });
  return c.json({});
});

export default app;
