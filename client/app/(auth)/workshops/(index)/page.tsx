import { Workshops } from './_components/workshops';
import { schema } from '../../../../types/common';
import { fetcher } from '../../../../util/fetcher';

export default async function WorkshopsPage() {
  const workshops = await fetcher.get<schema['Workshop'][]>('/workshops', { cache: 'no-cache' });

  return <Workshops workshops={workshops} />;
}
