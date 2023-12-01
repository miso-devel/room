import { schema } from "../../types/common.ts";
import { addPostRequiredData } from "../../util/addRequiredData.ts";

type TSpeaker = schema["Speaker"];

export const createSpeaker = (eventId: string, memberId: string): TSpeaker => {
  return {
    ...addPostRequiredData({}),
    eventId,
    memberId,
  };
};
