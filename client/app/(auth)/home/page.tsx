import { schema } from '../../../types/common';
import { fetcher } from '../../../util/fetcher';
import { Workshops } from './_components/workshops';

export default async function Home() {
  const workshops = await fetcher.get<schema['Workshop'][]>('/workshops', { cache: 'no-cache' });

  return (
    <div className="grid grid-cols-2 gap-5">
      <Workshops workshops={workshops} />
    </div>
  );
}
