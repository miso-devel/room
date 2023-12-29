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
