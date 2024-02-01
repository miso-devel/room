'use server';
import { redirect } from 'next/navigation';
import { schema } from '../../../../../../types/common';
import { fetcher } from '../../../../../../util/fetcher';

export const submit = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const res = await fetcher.post<schema['WorkshopInput'], schema['Workshop']>(
    '/workshops',
    { title, description },
    { cache: 'no-cache' },
  );
  res && redirect(`/workshops/${res.id}`);
};
