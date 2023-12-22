import { schema } from '../../../../../types/common';
import { fetcher } from '../../../../../util/fetcher';
import { WorkshopEditPageTitle } from './_components/workshopEditPageTitle';
import { WorkshopEditForm } from './_components/workshopEditForm';

export default async function WorkshopsShowPage({ params }: { params: { workshopId: string } }) {
  const workshop = await fetcher.get<schema['Workshop']>(`/workshops/${params.workshopId}`);

  return (
    <WorkshopEditPageTitle workshop={workshop}>
      <WorkshopEditForm workshop={workshop} />
    </WorkshopEditPageTitle>
  );
}
