import { Button } from '../../../../../../components/ui/Button';
import { FormWrapper } from '../../../../../../components/ui/Form/FormWrapper';
import { Input } from '../../../../../../components/ui/Form/Input';
import { Textarea } from '../../../../../../components/ui/Form/Textarea';
import { FC } from 'react';
import { submit } from './actions';
import { WorkshopNewButton } from '../workshopNewButton';

export const WorkshopForm: FC = () => {
  return (
    <FormWrapper action={submit}>
      <Input label="勉強会名" name="title" placeholder="workshop name here" type="text" required />
      <Textarea label="説明" name="description" placeholder="workshop description here" />
      <WorkshopNewButton />
    </FormWrapper>
  );
};
