import { components } from '@/types/schema';
import { Workshops } from './_components/workshops';

export default async function WorkshopsPage() {
  const workshops: components['schemas']['Workshop'][] = await fetch(`${process.env.SERVER_URL}/workshops`, {
    cache: 'no-cache',
  }).then(async (data) => await data.json());
  console.log(workshops);
  return (
    <div className="prose">
      <div className="flex gap-3">
        <h1>workshop</h1>
        <a className="btn btn-outline btn-secondary" role="button" href="/workshops/new">
          作成
        </a>
      </div>
      <Workshops workshops={workshops} />
    </div>
  );
}
