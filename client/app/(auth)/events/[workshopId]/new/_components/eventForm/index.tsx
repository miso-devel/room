import { FC } from 'react';
import { redirect } from 'next/navigation';
import { schema } from '../../../../../../../types/common';
import { FormWrapper } from '../../../../../../../components/ui/Form/FormWrapper';
import { Input } from '../../../../../../../components/ui/Form/Input';
import { Button } from '../../../../../../../components/ui/Button';
import { UserSelectModal } from '../UserSelectModal';
import { fetcher } from '../../../../../../../util/fetcher';
import { Workshop } from '../workshop';

type TEventForm = FC<{ workshopId: string }>;

export const EventForm: TEventForm = async ({ workshopId }) => {
  const workshop = await fetcher.get<schema['Workshop']>(`/workshops/${workshopId}`);
  const members = await fetcher.get<schema['User'][]>('/users');

  const submit = async (formData: FormData) => {
    'use server';
    const theme = formData.get('theme') as string;
    const datetime = formData.get('datetime') as string;
    const discordIds = formData.getAll('discordIds') as string[];
    const eventInput: schema['EventInput'] = {
      event: { workshopId, theme, datetime },
      discordIds: discordIds,
    };

    const event = await fetcher.post<schema['EventInput'], schema['Event']>('/events', eventInput);
    redirect(`/workshops/${event.workshopId}`);
  };

  return (
    <>
      <Workshop workshop={workshop} />
      <FormWrapper action={submit}>
        <Input label="テーマ" name="theme" placeholder="theme here" type="text" required />
        <Input label="時間" name="datetime" placeholder="date here" type="datetime-local" required />
        <UserSelectModal users={members} />
        <Button>作成する</Button>
      </FormWrapper>
    </>
  );
};
