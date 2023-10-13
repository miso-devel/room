import { Bot } from "../bot/main.ts";
import { Secret } from "../secret.ts";

const index = async () => {
  const members = await Bot.helpers.getMembers(Secret.GUILD_ID, { limit: 300 });
  return members.entries;
};

const show = async () => {
  const members = await Bot.helpers.getMembers(Secret.GUILD_ID, { limit: 300 });
  return members.entries;
};

export const Member = { index, show };
