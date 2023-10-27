import { components } from '@/types/schema';
import { WorkshopForm } from './_components/workshopForm';

type TMember = components['schemas']['User'][];

export default async function NewWorkshop() {
  return (
    <div className="prose max-w-full">
      <h1>workshop new</h1>
      <WorkshopForm />
    </div>
  );
}
