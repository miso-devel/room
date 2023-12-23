/// <reference lib="deno.unstable" />

import { PREFIX } from "../constants/prefix.ts";
import { SECRET } from "../constants/secret.ts";
import { throwAPIError } from "../util/throwError.ts";

const kv = await Deno.openKv(
  SECRET.ENV === "dev" ? "dev.db.sqlite" : "prod.db.sqlite",
);
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

export const DB = {
  fetchAll,
  fetchOne,
  createOne,
  updateOne,
  deleteOne,
};
