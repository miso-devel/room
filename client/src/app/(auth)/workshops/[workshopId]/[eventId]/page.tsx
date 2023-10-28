import { components } from '@/types/schema';

type TMember = components['schemas']['User'][];

export default async function Event() {
  const members: TMember = await fetch(`${process.env.SERVER_URL}/members`).then(async (data) => data.json());

  return (
    <div className="prose max-w-full">
      <h1>Event 詳細</h1>
    </div>
  );
}
