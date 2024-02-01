"use server";
import { redirect } from "next/navigation";
import { schema } from "../../../../../../../types/common";
import { fetcher } from "../../../../../../../util/fetcher";

export const submit = async (formData: FormData, event: schema["Event"]) => {
  const theme = formData.get("theme") as string;
  const updatedEvent: schema["Event"] = { ...event, theme };
  const res = await fetcher.patch<schema["Event"], schema["Event"]>(
    "/events",
    updatedEvent,
  );
  res && redirect(`/workshops/${res.workshopId}`);
};
