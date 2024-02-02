import { WithTitleWrapper } from '../../../../../../../components/layout/WithTitleWrapper';
import { schema } from '../../../../../../../types/common';
import { FC } from 'react';
import { fetcher } from '../../../../../../../util/fetcher';
import { WorkshopDeleteButton } from '../WorkshopDeleteButton';

type TWorkshopPageTitle = FC<{ workshopId: string }>;

export const WorkshopPageTitle: TWorkshopPageTitle = async ({ workshopId }) => {
  const workshop = await fetcher.get<schema['Workshop']>(`/workshops/${workshopId}`, { cache: 'no-cache' });

  return (
    <WithTitleWrapper title={workshop.title} additionalElms={<WorkshopDeleteButton workshopId={workshopId} />}>
      <div className="my-3 break-all rounded-md bg-middle p-3">
        <p>{workshop.description}</p>
      </div>
    </WithTitleWrapper>
  );
};
