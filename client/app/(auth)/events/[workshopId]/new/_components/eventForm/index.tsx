import { FC } from 'react';
import { redirect } from 'next/navigation';
import { schema } from '../../../../../../../types/common';
import { FormWrapper } from '../../../../../../../components/ui/Form/FormWrapper';
import { Input } from '../../../../../../../components/ui/Form/Input';
import { Button } from '../../../../../../../components/ui/Button';
import { MemberSelectModal } from '../MemberSelectModal';
import { fetcher } from '../../../../../../../util/fetcher';

type TProps = { members: schema['User'][]; workshop: schema['Workshop'] };

export const EventForm: FC<TProps> = ({ members, workshop }) => {
  const submit = async (formData: FormData) => {
    'use server';
    const theme = formData.get('theme') as string;
    const datetime = formData.get('datetime') as string;
    const speakerIds = formData.getAll('members') as string[];
    const eventInput: schema['EventInput'] = {
      event: { workshopId: workshop.id, theme, datetime },
      speakerIds: speakerIds,
    };

    const event = await fetcher.post<schema['EventInput'], schema['Event']>('/events', eventInput);
    redirect(`/workshops/${event.workshopId}`);
  };

  return (
    <FormWrapper action={submit}>
      <Input label="テーマ" name="theme" placeholder="theme here" type="text" required />
      <Input label="時間" name="datetime" placeholder="date here" type="datetime-local" required />
      <MemberSelectModal members={members} />
      <Button>作成する</Button>
    </FormWrapper>
  );
};
