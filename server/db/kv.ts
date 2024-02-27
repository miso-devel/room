/// <reference lib="deno.unstable" />

import { PREFIX } from "../constants/prefix.ts";
import { schema } from "../types/common.ts";
import { throwAPIError } from "../util/throwError.ts";
import {
  eventAnnouncementQueueHandler,
  eventCreateQueueHandler,
  eventStartQueueHandler,
  workshopCreateQueueHandler,
} from "./queueHandler.ts";

export const kv = await Deno.openKv();
type basic = { id: string; createdAt: number; updatedAt: number };

const fetchAll = async <T>(prefix: PREFIX): Promise<T[]> => {
  const datas: Deno.KvListIterator<T> = kv.list({ prefix: [prefix] });
  const result: T[] = [];
  for await (const { value } of datas) result.push(value);
  return result;
};

const fetchOne = async <T>(prefix: PREFIX, id: string): Promise<T> => {
  return (await kv.get([prefix, id])).value as T;
};

const createOne = async <T extends basic>(
  prefix: PREFIX,
  data: T,
): Promise<T> => {
  if (data.id === undefined) throwAPIError(500, "data id is undefined!!!!!!")();
  await kv.set([prefix, data.id], { ...data });
  return (await kv.get([prefix, data.id])).value as T;
};

const updateOne = async <
  T extends basic,
>(
  prefix: PREFIX,
  data: T,
): Promise<T> => {
  await kv.set([prefix, data.id], data);
  return (await kv.get([prefix, data.id])).value as T;
};

const deleteOne = async (prefix: PREFIX, id: string) => {
  await kv.delete([prefix, id]);
};

const enqueue = async <T>(key: string, data: T, delay: number) => {
  await kv.enqueue({ key, data }, { delay });
};

// Queueをlistenして、keyによって処理を分岐する
type TQueue = { key: string; data: unknown };
kv.listenQueue(async (queue: unknown) => {
  const { key, data } = queue as TQueue;
  switch (key) {
    case "create:workshop":
      await workshopCreateQueueHandler(
        data as { workshop: schema["Workshop"]; user: schema["User"] },
      );
      break;
    case "create:event":
      await eventCreateQueueHandler(
        data as { event: schema["EventOutput"]; user: schema["User"] },
      );
      break;
    case "announcement:event":
      await eventAnnouncementQueueHandler(data as schema["Event"]);
      break;
    case "start:event":
      await eventStartQueueHandler(data as schema["Event"]);
      break;
    default:
      break;
  }
});

export const DB = {
  fetchAll,
  fetchOne,
  createOne,
  updateOne,
  deleteOne,
  enqueue,
};
