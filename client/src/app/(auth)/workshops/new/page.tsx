import { WorkshopForm } from './_components/workshopForm';

export default async function NewWorkshop() {
  return (
    <div className="w-[60%] mx-auto">
      <h1 className="text-3xl mb-5">新しい勉強会を作成する</h1>
      <WorkshopForm />
    </div>
  );
}
