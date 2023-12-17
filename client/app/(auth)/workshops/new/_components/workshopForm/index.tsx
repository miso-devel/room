import { Button } from '../../../../../../components/ui/Button';
import { FormWrapper } from '../../../../../../components/ui/Form/FormWrapper';
import { Input } from '../../../../../../components/ui/Form/Input';
import { Textarea } from '../../../../../../components/ui/Form/Textarea';
import { schema } from '../../../../../../types/common';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { fetcher } from '../../../../../../util/fetcher';

export const WorkshopForm: FC = () => {
  const submit = async (formData: FormData) => {
    'use server';
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const res = await fetcher.post<schema['WorkshopInput'], schema['Workshop']>('/workshops', { title, description });
    res && redirect(`/workshops/${res.id}`);
  };

  return (
    <FormWrapper action={submit}>
      <Input label="勉強会名" name="title" placeholder="workshop name here" type="text" />
      <Textarea label="説明" name="description" placeholder="workshop description here" />
      <Button>作成</Button>
    </FormWrapper>
  );
};
