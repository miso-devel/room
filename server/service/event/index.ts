import { PREFIX_MAP } from "../../constants/prefix.ts";
import { DB } from "../../db/kv.ts";
import { collections } from "../../deps.ts";
import { schema } from "../../types/common.ts";
import { addPostRequiredData } from "../../util/addRequiredData.ts";

type TEvent = schema["Event"];
type TWorkshop = schema["Workshop"];
type TEventInput = schema["EventInput"];

export const createEventFromInput = (input: TEventInput) => ({
  ...addPostRequiredData(input.event),
  isCronTarget: false,
});

export const updatesEventFromInput = (input: TEventInput) => ({
  ...addPostRequiredData(input.event),
});

// eventを更新する際に、workを更新する必要がある
export const updateWorkshopEventInfo = async (workshopId: string) => {
  const workshop = await DB.fetchOne<TWorkshop>(
    PREFIX_MAP["workshop"],
    workshopId,
  );
  const events = await DB.fetchAll<TEvent>(PREFIX_MAP["event"]);
  const workshopEvents = events.filter((e) => e.workshopId === workshopId);
  const eventCount = workshopEvents.length;
  // TODO: 現在は最新のものを取ってきているが、本当は現在の日時より先かつ一番近いものを取ってきたい
  // TODO: また、これはまだほぼ実装できていないが、イベントが来た日にcron処理でdiscordの通知を飛ばすとともにlatestEventDateを更新したい
  const latestEventDatetime =
    collections.sortBy(workshopEvents, (e) => e.datetime)[0].datetime ?? 0;
  const updatedWorkshop: TWorkshop = {
    ...workshop,
    eventCount,
    latestEventDatetime,
  };
  await DB.updateOne<TWorkshop>(PREFIX_MAP["workshop"], updatedWorkshop);
};
