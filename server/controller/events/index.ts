import { DB } from "../../db/db.ts";
import { Env, Handler, TypedResponse } from "../../deps.ts";

import { components } from "../../types/schema.ts";

const prefix = "events";

type TEvent = components["schemas"]["Event"];

const index: Handler<Env, "/events", {}, Promise<TypedResponse>> = async (
  c,
) => {
  const { workshopId } = c.req.query();
  const events = await DB.fetchAll<TEvent>({ prefix });
  return c.json(events);
};

const show: Handler<Env, "/events/:id", {}, Promise<TypedResponse>> = async (
  c,
) => {
  const eventId = c.req.param("id");
  const event = await DB.fetchOne({ prefix, id: eventId });
  return c.json(event.value);
};

// TODO: ここでspeakersも登録できるようにする
// 受け取るdataをTEventの型とSpeakerの型にする
const create: Handler<Env, "/events", {}, Promise<TypedResponse>> = async (
  c,
) => {
  const data: TEvent = await c.req.json();
  const event = await DB.createOne<TEvent>({ prefix, data });
  return c.json(event.value);
};

const update: Handler<Env, "/events", {}, Promise<TypedResponse>> = async (
  c,
) => {
  return c.json({});
};

const remove: Handler<Env, "/events", {}, Promise<TypedResponse>> = async (
  c,
) => {
  return c.json({});
};

export const Event = { index, show, create, update, remove };
