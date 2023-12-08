import { schema } from '@/types/common';
import { Workshops } from './_components/workshops';

export default async function Home() {
  const workshops: schema['Workshop'][] = await fetch(`${process.env.SERVER_URL}/workshops`, {
    cache: 'no-cache',
  }).then(async (data) => await data.json());

  return (
    <div className="grid grid-cols-2 gap-5">
      <Workshops workshops={workshops} />
    </div>
  );
}
