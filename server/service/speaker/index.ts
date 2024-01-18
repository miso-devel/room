import { PREFIX_MAP } from "../../constants/prefix.ts";
import { DB } from "../../db/kv.ts";
import { schema } from "../../types/common.ts";
import { addPostRequiredData } from "../../util/addRequiredData.ts";
import { throwAPIError } from "../../util/throwError.ts";

type TSpeaker = schema["Speaker"];
type TCreateSpeakerProps = {
  discordIds: schema["EventInput"]["discordIds"];
  workshopId: schema["Workshop"]["id"];
  eventId: schema["Event"]["id"];
};

// eventのinputからspeakersを作成する際に使用する
export const createSpeakers = async (
  { discordIds, workshopId, eventId }: TCreateSpeakerProps,
): Promise<TSpeaker[]> => {
  const speakers = await Promise.all(
    discordIds.map(async (discordId: string) => {
      const speaker = await DB.createOne<TSpeaker>(PREFIX_MAP["speaker"], {
        ...addPostRequiredData({}),
        workshopId,
        eventId,
        discordId,
      });
      return speaker ?? throwAPIError(401, "speaker create failed")();
    }),
  );
  return speakers;
};

export const speakersByEventId = async (
  eventId: string,
): Promise<TSpeaker[]> => {
  const speakers = await DB.fetchAll<TSpeaker>(PREFIX_MAP["speaker"]);
  const filteredSpeakers = speakers.filter((speaker) =>
    speaker.eventId === eventId
  );

  return filteredSpeakers;
};
