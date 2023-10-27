import { Bot } from "../../bot/main.ts";
import { toMember } from "./util.ts";
import { components } from "../../types/schema.ts";
import { Env, Handler } from "https://deno.land/x/hono@v3.7.2/types.ts";
import { SECRET } from "../../secret.ts";

type TMember = components["schemas"]["User"];

// TODO: Handler<Env, "/members", {}, Promise<Response>>とかの型は結構無理やりしてる感じがあるので修正できるならする
const index: Handler<Env, "/members", {}, Promise<Response>> = async (c) => {
  const data = await Bot.helpers.getMembers(SECRET.GUILD_ID, { limit: 300 });
  const members: TMember[] = [];
  data.forEach((value, _) => members.push(toMember(value)));
  return c.json(members);
};

const show: Handler<Env, "/members/:id", {}, Promise<Response>> = async (c) => {
  const id = c.req.param("id");
  const data = await Bot.helpers.getMember(SECRET.GUILD_ID, BigInt(id));
  if (!id) return c.json({ error: "メンバーが存在しませんでした" });
  return c.json(toMember(data));
};

export const Member = { index, show };
