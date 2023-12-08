import { Button } from '@/components/ui/Button';
import { FormWrapper } from '@/components/ui/Form/FormWrapper';
import { Input } from '@/components/ui/Form/Input';
import { Textarea } from '@/components/ui/Form/Textarea';
import { schema } from '@/types/common';
import { redirect } from 'next/navigation';
import { FC } from 'react';

export const WorkshopForm: FC = () => {
  const submit = async (formData: FormData) => {
    'use server';
    const title = formData.get('title');
    const description = formData.get('description');
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/workshops`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      mode: 'cors',
      credentials: 'include',
    }).then(async (data) => {
      const workshop: schema['Workshop'] = await data.json();
      redirect(`/workshops/${workshop.id}`);
    });
  };

  return (
    <FormWrapper action={submit}>
      <Input label="勉強会名" name="title" placeholder="workshop name here" type="text" />
      <Textarea label="説明" name="description" placeholder="workshop description here" />
      <Button>作成</Button>
    </FormWrapper>
  );
};
