import { ButtonLink } from '@/components/ui/Link/ButtonLink';
import { Workshops } from './_components/workshops';
import { schema } from '@/types/common';

export default async function WorkshopsPage() {
  const workshops: schema['Workshop'][] = await fetch(`${process.env.SERVER_URL}/workshops`, {
    cache: 'no-cache',
  }).then(async (data) => await data.json());

  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-3xl">勉強会一覧</h1>
        <ButtonLink href="/workshops/new">作成</ButtonLink>
      </div>
      <Workshops workshops={workshops} />
    </div>
  );
}
