import { components } from '../../../../types/schema';

export default async function EventsPage() {
  const events: components['schemas']['Event'][] = await fetch(`${process.env.SERVER_URL}/events`).then(async (data) =>
    data.json()
  );

  return (
    <div className="prose">
      <div className="flex gap-3">
        <h1>events</h1>
        <a className="btn btn-outline btn-secondary" role="button" href="/events/new">
          作成
        </a>
      </div>
    </div>
  );
}
