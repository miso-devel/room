import { PREFIX_MAP } from "../../constants/prefix.ts";
import { DB } from "../../db/kv.ts";
import { Context, Hono } from "../../deps.ts";
import {
  createEventFromInput,
  getAllEvents,
  toEventsOutputs,
  updateWorkshopEventInfo,
} from "../../service/event/index.ts";
import { createSpeakers } from "../../service/speaker/index.ts";
import { schema } from "../../types/common.ts";
import { throwAPIError } from "../../util/throwError.ts";

type TEvent = schema["Event"];
type TEventInput = schema["EventInput"];

const app = new Hono();

// index
// queryにworkshopIdがある場合はそのworkshopのeventのみを返す
app.get("/", async (c: Context) => {
  const { workshopId } = c.req.query();
  const events = await getAllEvents();
  if (workshopId === undefined) return c.json(events);
  const workshopEvents = events.filter((e) => e.workshopId === workshopId);
  const eventOuputs = await toEventsOutputs(workshopEvents);
  return c.json(eventOuputs);
});

// show
app.get("/:id", async (c: Context) => {
  const eventId = c.req.param("id");
  const event = await DB.fetchOne<TEvent>(PREFIX_MAP["event"], eventId);
  if (event === undefined) throwAPIError(401, "event is not found")();
  return c.json(event);
});

// create
app.post("/", async (c: Context) => {
  const input: TEventInput = await c.req.json();
  const eventInput: TEvent = createEventFromInput(input);

  // TODO: eventの日付が現在よりも前の場合はエラーを返すようにしたい
  const event = await DB.createOne<TEvent>(PREFIX_MAP["event"], eventInput);
  if (!event) throwAPIError(401, "event create failed")();

  const speakers = await createSpeakers({
    discordIds: input.discordIds,
    workshopId: input.event.workshopId,
    eventId: event.id,
  });

  await updateWorkshopEventInfo(input.event.workshopId);
  return c.json({ ...event, speakers });
});

// update
app.patch("/", async (c: Context) => {
  const input: TEvent = await c.req.json();
  const event = await DB.updateOne<TEvent>(PREFIX_MAP["event"], input);
  return c.json(event);
});

// delete
app.delete("/", async (c: Context) => {
  await DB.deleteOne(PREFIX_MAP["event"], c.req.param("id"));
  await updateWorkshopEventInfo(c.req.param("id"));
  return c.json({});
});

export default app;
