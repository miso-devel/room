import { Bot } from "../../bot/bot.ts";
import { getAvatarURL, type Member as TInternalMember } from "../../deps.ts";
import { schema } from "../../types/common.ts";

type TMember = schema["User"];

export const toMember = (member: TInternalMember): TMember => {
  const avatarUrl = getAvatarURL(
    Bot,
    member.user?.id.toString() as string,
    member.user?.username as string,
    { avatar: member.user?.avatar },
  );

  return {
    id: member.user?.id.toString() ?? "",
    name: member.user?.username ?? "",
    avatar: avatarUrl,
    joinedAt: member.joinedAt,
  };
};
