/// <reference lib="deno.unstable" />

import { PREFIX } from "../constants/prefix.ts";
import { SECRET } from "../constants/secret.ts";

const kv = await Deno.openKv(SECRET.ENV === "dev" ? "dev.db" : "prod.db");
type id = { id: string };
type prefix = { prefix: PREFIX };
type data<T> = { data: T };
type basic = { id: string; createdAt: number; updatedAt: number };
type KvRes<T> = Deno.KvEntryMaybe<T>;

type TfetchAll = prefix;
type TFetchOne = id & prefix;
type TCreate<T extends basic> = prefix & data<T>;
type TUpdate<T extends basic> = prefix & data<T>;
type TDelete = id & prefix;

const fetchAll = async <T>({ prefix }: TfetchAll): Promise<T[]> => {
  const datas: Deno.KvListIterator<T> = kv.list({ prefix: [prefix] });
  const result: T[] = [];
  for await (const { value } of datas) result.push(value);
  return result;
};

const fetchOne = async <T>({ id, prefix }: TFetchOne): Promise<KvRes<T>> => {
  return await kv.get([prefix, id]) as KvRes<T>;
};

const createOne = async <
  T extends basic,
>(
  { data, prefix }: TCreate<T>,
): Promise<KvRes<T>> => {
  await kv.set([prefix, data.id], { ...data });
  return await kv.get([prefix, data.id]) as KvRes<T>;
};

const updateOne = async <
  T extends basic,
>(
  { prefix, data }: TUpdate<T>,
): Promise<KvRes<T>> => {
  await kv.set([prefix, data.id], data);
  return await kv.get([prefix, data.id]) as KvRes<T>;
};

const deleteOne = async ({ id, prefix }: TDelete) => {
  await kv.delete([prefix, id]);
};

export const DB = {
  fetchAll,
  fetchOne,
  createOne,
  updateOne,
  deleteOne,
};
