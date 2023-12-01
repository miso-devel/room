import { PREFIX_MAP } from "../../constants/prefix.ts";
import { DB } from "../../db/kv.ts";
import { Context, Hono } from "../../deps.ts";
import { createSpeaker } from "../../service/speaker/createSpeaker.ts";
import { schema } from "../../types/common.ts";
import { addPostRequiredData } from "../../util/addRequiredData.ts";
import { throwAPIError } from "../../util/throwError.ts";

type TEvent = schema["Event"];
type TSpeaker = schema["Speaker"];
type TEventInput = schema["EventInput"];
// type TEventOutput = schema["EventOutput"];

const app = new Hono();

// index
app.get("/", async (c: Context) => {
  const { workshopId } = c.req.query();
  const events = await DB.fetchAll<TEvent>({ prefix: PREFIX_MAP["event"] });
  const workshopEvents = events.filter((event) =>
    event.workshopId === workshopId
  );
  return c.json(workshopEvents);
});

// show
app.get("/:id", async (c: Context) => {
  const eventId = c.req.param("id");
  const event = await DB.fetchOne<TEvent>({
    prefix: PREFIX_MAP["event"],
    id: eventId,
  });
  if (event === undefined) throwAPIError(401, "event is not found")();
  return c.json(event.value);
});

// create
app.post("/", async (c: Context) => {
  const input: TEventInput = await c.req.json();
  const eventInput: TEvent = {
    ...addPostRequiredData(input.event),
    isCronTarget: false,
  };

  const event: TEvent = (await DB.createOne<TEvent>({
    prefix: PREFIX_MAP["event"],
    data: eventInput,
  }))
    .value ??
    throwAPIError(401, "event create failed")();

  const speakers: TSpeaker[] = await Promise.all(
    input.speakerIds.map(async (speakerId: string) => {
      const speaker = await DB.createOne<TSpeaker>({
        prefix: PREFIX_MAP["event"],
        data: createSpeaker(event.id, speakerId),
      });
      return speaker.value ?? throwAPIError(401, "speaker create failed")();
    }),
  );

  return c.json({ event, speakers });
});

// update
app.patch("/", async (c: Context) => {
  const input: TEvent = await c.req.json();
  const eventInput: TEvent = {
    ...input,
    isCronTarget: false,
  };
  const event = await DB.updateOne<TEvent>({
    prefix: PREFIX_MAP["event"],
    data: eventInput,
  });
  return c.json(event.value);
});

// delete
app.delete("/", async (c: Context) => {
  await DB.deleteOne({ prefix: PREFIX_MAP["event"], id: c.req.param("id") });
  return c.json({});
});

export default app;
