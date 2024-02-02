"use server";
import { redirect } from "next/navigation";
import { schema } from "../../../../../../types/common";
import { fetcher } from "../../../../../../util/fetcher";

export const submit = async (formData: FormData, workshopId: string) => {
  const theme = formData.get("theme") as string;
  const datetime = formData.get("datetime") as string;
  const discordIds = formData.getAll("discordIds") as string[];
  const eventInput: schema["EventInput"] = {
    event: { workshopId, theme, datetime },
    discordIds: discordIds,
  };
  const event = await fetcher.post<schema["EventInput"], schema["Event"]>(
    "/events",
    eventInput,
  );
  redirect(`/workshops/${event.workshopId}`);
};
