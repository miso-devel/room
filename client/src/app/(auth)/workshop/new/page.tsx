import { components } from '@/types/schema';
import { Form } from './_components/form';

type TMember = components['schemas']['User'][];

export default async function Study() {
  const members: TMember = await fetch(`${process.env.SERVER_URL}/members`).then(async (data) => data.json());
  return (
    <div className="prose max-w-full">
      <h1>workshop new</h1>
      <Form members={members} />
    </div>
  );
}
