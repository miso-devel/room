import { type Member as TInternalMember } from "../../deps.ts";
import { TMember } from "./type.ts";

export const toMember = (member: TInternalMember): TMember => {
  return {
    id: member.user?.id.toString(),
    name: member.user?.username,
    avatar: member.avatar?.toString(),
    joinedAt: member.joinedAt,
  };
};
