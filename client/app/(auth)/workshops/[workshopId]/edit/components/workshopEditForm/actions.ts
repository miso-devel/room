'use server';
import { redirect } from 'next/navigation';
import { schema } from '../../../../../../../types/common';
import { fetcher } from '../../../../../../../util/fetcher';

export const submit = async (formData: FormData, workshop: schema['Workshop']) => {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const updatedWorkshop: schema['Workshop'] = { ...workshop, title, description };
  const res = await fetcher.patch<schema['Workshop'], schema['Workshop']>('/workshops', updatedWorkshop);
  res && redirect(`/workshops/${res.id}`);
};
