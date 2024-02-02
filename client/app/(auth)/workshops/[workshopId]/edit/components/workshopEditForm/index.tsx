'use client';
import { FC } from 'react';
import { schema } from '../../../../../../../types/common';
import { FormWrapper } from '../../../../../../../components/ui/Form/FormWrapper';
import { Input } from '../../../../../../../components/ui/Form/Input';
import { Textarea } from '../../../../../../../components/ui/Form/Textarea';
import { WorkshopEditPageTitle } from '../workshopEditPageTitle';
import { WorkshopEditButton } from '../workshopEditButton';
import { submit } from './actions';

type TWorkshopForm = FC<{ workshop: schema['Workshop'] }>;

export const WorkshopEditForm: TWorkshopForm = ({ workshop }) => {
  return (
    <WorkshopEditPageTitle workshop={workshop}>
      <FormWrapper action={async (form) => await submit(form, workshop)}>
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
        <WorkshopEditButton />
      </FormWrapper>
    </WorkshopEditPageTitle>
  );
};
