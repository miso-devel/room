'use client';
import { useFormStatus } from 'react-dom';

import { FC } from 'react';
import { Button } from '../../../../../../components/ui/Button';
import { Spinner } from '../../../../../../components/ui/Spinner';

export const WorkshopNewButton: FC = () => {
  const { pending } = useFormStatus();

  return <Button disabled={pending}>{pending ? <Spinner dark /> : '作成'}</Button>;
};
