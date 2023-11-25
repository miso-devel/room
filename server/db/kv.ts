/// <reference lib="deno.unstable" />

const kv = await Deno.openKv("local.deno.db");
type id = { id: string };
type prefix = { prefix: string };
type data<T> = { data: T };
export type withId<T> = T & id;

type TfetchAll = prefix;
const fetchAll = async <T>({ prefix }: TfetchAll): Promise<withId<T>[]> => {
  const datas: Deno.KvListIterator<withId<T>> = kv.list({ prefix: [prefix] });
  const result: withId<T>[] = [];
  for await (const { value } of datas) result.push(value as withId<T>);
  return result;
};

type TFetchOne = id & prefix;
const fetchOne = async <T>(
  { id, prefix }: TFetchOne,
): Promise<Deno.KvEntryMaybe<withId<T>>> => {
  return await kv.get([prefix, id]) as Deno.KvEntryMaybe<withId<T>>;
};

type TCreate<T> = data<T> & prefix;
const createOne = async <T>(
  { data, prefix }: TCreate<T>,
): Promise<Deno.KvEntryMaybe<withId<T>>> => {
  const id = crypto.randomUUID();
  await kv.set([prefix, id], { id, ...data });
  return await kv.get([prefix, id]) as Deno.KvEntryMaybe<withId<T>>;
};

type TUpdate<T> = id & prefix & data<T>;
const updateOne = async <T>(
  { id, prefix, data }: TUpdate<withId<T>>,
): Promise<Deno.KvEntryMaybe<withId<T>>> => {
  await kv.set([prefix, id], data);
  return await kv.get([prefix, id]) as Deno.KvEntryMaybe<withId<T>>;
};

type TDelete = id & prefix;
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