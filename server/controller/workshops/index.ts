import { PREFIX_MAP } from "../../constants/prefix.ts";
import { DB } from "../../db/kv.ts";
import { collections, Context, Hono } from "../../deps.ts";
import { addWorkshopRequiredData } from "../../service/workshop/index.ts";
import { schema } from "../../types/common.ts";
import { addUpdateRequiredData } from "../../util/addRequiredData.ts";

type TWorkshop = schema["Workshop"];
type TWorkshopInput = schema["WorkshopInput"];

const app = new Hono();

app.get("/", async (c: Context) => {
  const limit = Number(c.req.query("limit"));
  const workshops = await DB.fetchAll<TWorkshop>(PREFIX_MAP["workshop"]);
  // eventがない場合はcreatedAtでsortする
  const sortedWorkshop = collections
    .sortBy(workshops, (w) => new Date(w.latestEventDatetime ?? w.createdAt))
    .reverse();
  return c.json(
    limit ? sortedWorkshop.slice(0, limit) : sortedWorkshop,
  );
});

app.get("/:id", async (c: Context) => {
  const workshopId = c.req.param("id");
  const workshop = await DB.fetchOne<TWorkshop>(
    PREFIX_MAP["workshop"],
    workshopId,
  );
  return c.json(workshop);
});

app.post("/", async (c: Context) => {
  const input: TWorkshopInput = await c.req.json();
  const workshopInput: TWorkshop = addWorkshopRequiredData(input);
  const workshop = await DB.createOne<TWorkshop>(
    PREFIX_MAP["workshop"],
    workshopInput,
  );
  await DB.enqueue("workshop", workshop, 5000);
  return c.json(workshop);
});

app.patch("/", async (c: Context) => {
  const input: TWorkshop = await c.req.json();
  const workshopInput: TWorkshop = addUpdateRequiredData(input);
  const workshop = await DB.updateOne<TWorkshop>(
    PREFIX_MAP["workshop"],
    workshopInput,
  );
  return c.json(workshop);
});

app.delete("/", async (c: Context) => {
  const { id }: { id: string } = await c.req.json();
  await DB.deleteOne(PREFIX_MAP["workshop"], id);
  const events = await DB.fetchAll<schema["Event"]>(PREFIX_MAP["event"]);
  const filteredEvents = events.filter((e) => e.workshopId !== id);
  for (const event of filteredEvents) {
    await DB.deleteOne(PREFIX_MAP["event"], event.id);
  }
  return c.json({});
});

export default app;
