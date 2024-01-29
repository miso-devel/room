'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Button } from '../../../../../../../components/ui/Button';

export const WorkshopEditButton = () => {
  const { pending } = useFormStatus();

  return <Button disable={pending}>編集完了</Button>;
};
