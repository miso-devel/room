import { PREFIX_MAP } from "../../constants/prefix.ts";
import { DB } from "../../db/kv.ts";
import { schema } from "../../types/common.ts";
import { addPostRequiredData } from "../../util/addRequiredData.ts";
import { throwAPIError } from "../../util/throwError.ts";

type TSpeaker = schema["Speaker"];
type TCreateSpeakerProps = {
  speakerIds: schema["EventInput"]["speakerIds"];
  workshopId: schema["Workshop"]["id"];
  eventId: schema["Event"]["id"];
};

// eventのinputからspeakersを作成する際に使用する
export const createSpeakers = async (
  { speakerIds, workshopId, eventId }: TCreateSpeakerProps,
): Promise<TSpeaker[]> => {
  const speakers = await Promise.all(
    speakerIds.map(async (speakerId: string) => {
      const speaker = await DB.createOne<TSpeaker>(PREFIX_MAP["speaker"], {
        ...addPostRequiredData({}),
        workshopId,
        eventId,
        memberId: speakerId,
      });
      return speaker ?? throwAPIError(401, "speaker create failed")();
    }),
  );
  return speakers;
};
