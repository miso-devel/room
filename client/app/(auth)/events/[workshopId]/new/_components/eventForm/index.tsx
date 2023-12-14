import { FC } from 'react';
import { redirect } from 'next/navigation';
import { schema } from '../../../../../../../types/common';
import { FormWrapper } from '../../../../../../../components/ui/Form/FormWrapper';
import { Input } from '../../../../../../../components/ui/Form/Input';
import { Button } from '../../../../../../../components/ui/Button';
import { MemberSelectModal } from '../MemberSelectModal';

type TProps = { members: schema['User'][]; workshop: schema['Workshop'] };

export const EventForm: FC<TProps> = ({ members, workshop }) => {
  const submit = async (formData: FormData) => {
    'use server';
    const theme = formData.get('theme') as string;
    const date = formData.get('date') as string;
    const speakerIds = formData.getAll('members') as string[];
    const eventInput: schema['EventInput'] = {
      event: { workshopId: workshop.id, theme, date },
      speakerIds: speakerIds,
    };
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`, {
      method: 'POST',
      body: JSON.stringify(eventInput),
      mode: 'cors',
      credentials: 'include',
    });
    redirect(`/workshops/${workshop.id}`);
  };

  return (
    <FormWrapper action={submit}>
      <Input label="テーマ" name="theme" placeholder="theme here" type="text" />
      <Input label="時間" name="date" placeholder="date here" type="datetime-local" />
      <MemberSelectModal members={members} />
      <Button>イベントの作成です</Button>
    </FormWrapper>
  );
};
