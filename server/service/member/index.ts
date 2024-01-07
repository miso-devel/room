import { Bot } from "../../bot/bot.ts";
import { SECRET } from "../../constants/secret.ts";
import { toMember } from "../../controller/members/util.ts";
import { Member } from "../../deps.ts";
import { schema } from "../../types/common.ts";
import { throwAPIError } from "../../util/throwError.ts";

export const getMemberByUserId = async (
  id: string,
): Promise<schema["User"]> => {
  const member: Member = await Bot.helpers.getMember(SECRET.GUILD_ID, id)
    .then((data: Member) => data)
    .catch(throwAPIError(401, "user not found"));

  return toMember(member);
};

export const getUserByAccessToken = async (
  accessToken: string,
): Promise<schema["User"]> => {
  const user = await fetch(
    "https://discord.com/api/oauth2/@me",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        token: accessToken,
        token_type_hint: "access_token",
      }),
    },
  ).then((res) => res.json());

  return user;
};
