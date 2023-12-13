import { Workshops } from './_components/workshops';
import { schema } from '@/types/common';
import Add from 'public/svg/add.svg';
import { SvgLink } from '@/components/ui/Link/SvgLink';

export default async function WorkshopsPage() {
  const workshops: schema['Workshop'][] = await fetch(`${process.env.SERVER_URL}/workshops`, {
    cache: 'no-cache',
  }).then(async (data) => await data.json());

  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-3xl">勉強会一覧</h1>
        <SvgLink href="/workshops/new" ariaLabel="勉強会作成">
          <Add className="fill-dark hover:fill-bright rounded-md bg-middle hover:bg-dark" />
        </SvgLink>
      </div>
      <Workshops workshops={workshops} />
    </div>
  );
}
