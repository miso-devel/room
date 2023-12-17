import { schema } from "../../types/common.ts";
import { addPostRequiredData } from "../../util/addRequiredData.ts";

type TWorkshopInput = schema["WorkshopInput"];

export const addWorkshopRequiredData = (input: TWorkshopInput) => {
  const workshopInput = addPostRequiredData(input);
  const workshop: schema["Workshop"] = {
    ...workshopInput,
    description: workshopInput.description ?? "",
    eventCount: 0,
  };
  return workshop;
};
