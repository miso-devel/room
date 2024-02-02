"use client";
import { FC } from "react";
import { schema } from "../../../../../../types/common";
import { FormWrapper } from "../../../../../../components/ui/Form/FormWrapper";
import { Input } from "../../../../../../components/ui/Form/Input";
import { UserSelectModal } from "../UserSelectModal";
import { Workshop } from "../workshop";
import { submit } from "./actions";
import { EventNewButton } from "../eventNewButton";

type TEventForm = FC<{ workshop: schema["Workshop"]; users: schema["User"][] }>;

export const EventForm: TEventForm = async ({ workshop, users }) => {
  return (
    <>
      <Workshop workshop={workshop} />
      <FormWrapper action={async (form) => await submit(form, workshop.id)}>
        <Input
          label="テーマ"
          name="theme"
          placeholder="theme here"
          type="text"
          required
        />
        <Input
          label="時間"
          name="datetime"
          placeholder="date here"
          type="datetime-local"
          required
        />
        <UserSelectModal users={users} />
        <EventNewButton />
      </FormWrapper>
    </>
  );
};
