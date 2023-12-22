import { redirect } from 'next/navigation';
import { FC } from 'react';
import { schema } from '../../../../../../../types/common';
import { fetcher } from '../../../../../../../util/fetcher';
import { FormWrapper } from '../../../../../../../components/ui/Form/FormWrapper';
import { Input } from '../../../../../../../components/ui/Form/Input';
import { Textarea } from '../../../../../../../components/ui/Form/Textarea';
import { Button } from '../../../../../../../components/ui/Button';

type TWorkshopFormProps = { workshop: schema['Workshop'] };

export const WorkshopEditForm: FC<TWorkshopFormProps> = ({ workshop }) => {
  const submit = async (formData: FormData) => {
    'use server';
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const updatedWorkshop: schema['Workshop'] = { ...workshop, title, description };
    const res = await fetcher.patch<schema['Workshop'], schema['Workshop']>('/workshops', updatedWorkshop);
    res && redirect(`/workshops/${res.id}`);
  };

  return (
    <FormWrapper action={submit}>
      <Input
        label="勉強会名"
        name="title"
        placeholder="workshop name here"
        type="text"
        defaultValue={workshop.title}
        required
      />
      <Textarea
        label="説明"
        name="description"
        placeholder="workshop description here"
        defaultValue={workshop.description}
      />
      <Button>編集完了</Button>
    </FormWrapper>
  );
};
