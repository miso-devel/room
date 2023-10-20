import { Bot } from "../../bot/main.ts";
import { getAvatarURL, type Member as TInternalMember } from "../../deps.ts";
import { TMember } from "./type.ts";

export const toMember = (member: TInternalMember): TMember => {
  const avatarUrl = getAvatarURL(
    Bot,
    member.user?.id.toString() as string,
    member.user?.username as string,
    { avatar: member.user?.avatar },
  );

  console.log(avatarUrl);
  return {
    id: member.user?.id.toString(),
    name: member.user?.username,
    avatar: avatarUrl,
    joinedAt: member.joinedAt,
  };
};
