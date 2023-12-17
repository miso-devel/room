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
  const latestEventDate =
    collections.sortBy(workshopEvents, (e) => e.date)[0].date ?? 0;
  const updatedWorkshop = { ...workshop, eventCount, latestEventDate };
  await DB.updateOne<TWorkshop>(PREFIX_MAP["workshop"], updatedWorkshop);
};
