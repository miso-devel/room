import { Form } from './_components/form';

export default async function Study() {
  const members = await fetch(`${process.env.CLIENT_URL}/members`).then(async (data) => data.json());
  return (
    <div className="prose">
      <h1>workshop new</h1>
      <Form members={members} />
    </div>
  );
}
