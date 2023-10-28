import { components } from '@/types/schema';

export default async function WorkshopsShowPage({ params }: { params: { workshopId: string } }) {
  const workshop: components['schemas']['Workshop'] = await fetch(
    `${process.env.SERVER_URL}/workshops/${params.workshopId}`
  ).then((data) => data.json());

  const events: components['schemas']['Event'] = await fetch(
    `${process.env.SERVER_URL}/events?workshopId=${params.workshopId}`
  ).then((data) => data.json());

  return (
    <div className="prose">
      <div className="flex flex-col gap-3">
        <h1 className="m-0">{workshop.title}</h1>
        <p className="m-0">{workshop.description}</p>
      </div>
      <div className="flex justify-center my-5">
        <a className="btn btn-outline btn-secondary w-full" role="button" href={`/workshops/${params.workshopId}/new`}>
          イベントの作成
        </a>
      </div>
    </div>
  );
}
