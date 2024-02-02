"use client";
import { FC } from "react";
import { schema } from "../../../../../../../types/common";
import { FormWrapper } from "../../../../../../../components/ui/Form/FormWrapper";
import { Input } from "../../../../../../../components/ui/Form/Input";
import { EventEditPageTitle } from "../eventEditPageTitle";
import { WorkshopEditButton } from "../eventEditButton";
import { submit } from "./actions";

type TWorkshopForm = FC<{ event: schema["Event"] }>;

export const EventEditForm: TWorkshopForm = ({ event }) => {
  return (
    <EventEditPageTitle event={event}>
      <FormWrapper action={async (form) => await submit(form, event)}>
        <Input
          label="イベント名"
          name="theme"
          placeholder="event name here"
          type="text"
          defaultValue={event.theme}
          required
        />
        <WorkshopEditButton />
      </FormWrapper>
    </EventEditPageTitle>
  );
};
