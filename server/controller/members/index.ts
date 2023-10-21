import { Bot } from "../../bot/main.ts";
import { Secret } from "../../secret.ts";
import { toMember } from "./util.ts";
import { components } from "../../types/schema.ts";

type TMember = components["schemas"]["User"];

const index = async () => {
  const data = await Bot.helpers.getMembers(Secret.GUILD_ID, { limit: 300 });
  const members: TMember[] = [];
  data.forEach((value, _) => members.push(toMember(value)));
  return members;
};

const show = async (id: string) => {
  const data = await Bot.helpers.getMember(Secret.GUILD_ID, BigInt(id));
  return toMember(data);
};

export const Member = { index, show };
