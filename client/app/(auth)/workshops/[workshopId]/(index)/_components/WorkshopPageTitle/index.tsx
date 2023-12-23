'use client';

import { WithTitleWrapper } from '../../../../../../../components/layout/WithTitleWrapper';
import { SvgLink } from '../../../../../../../components/ui/Link/SvgLink';
import { schema } from '../../../../../../../types/common';
import Edit from 'public/svg/edit.svg';
import Delete from 'public/svg/delete.svg';
import { FC } from 'react';
import { fetcher } from '../../../../../../../util/fetcher';
import { useRouter } from 'next/navigation';

type TWorkshopInfoProps = { workshop: schema['Workshop'] };

export const WorkshopPageTitle: FC<TWorkshopInfoProps> = ({ workshop }) => {
  const router = useRouter();
  return (
    <WithTitleWrapper
      title={workshop.title}
      additionalElms={
        <div className="flex gap-1">
          <SvgLink href={`/workshops/${workshop.id}/edit`} ariaLabel="イベントの作成">
            <Edit className="h-6 w-6 rounded-md bg-middle fill-dark p-1 hover:bg-dark hover:fill-bright" />
          </SvgLink>
          <button
            onClick={async () => {
              if (confirm('本当に削除しますか？')) {
                await fetcher.delete('/workshops', { id: workshop.id });
                router.push('/workshops');
              }
            }}
          >
            <Delete className="h-6 w-6 rounded-md bg-middle fill-dark p-1 hover:bg-dark hover:fill-bright" />
          </button>
        </div>
      }
    >
      <div className="my-3 break-all rounded-md bg-middle p-3">
        <p>{workshop.description}</p>
      </div>
    </WithTitleWrapper>
  );
};
