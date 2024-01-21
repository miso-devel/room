'use client';

import { WithTitleWrapper } from '../../../../../../../components/layout/WithTitleWrapper';
import { SvgLink } from '../../../../../../../components/ui/Link/SvgLink';
import { schema } from '../../../../../../../types/common';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { SvgImage } from '../../../../../../../components/ui/Image/SvgImage';

type TWorkshopInfoProps = { workshop: schema['Workshop'] };

export const WorkshopPageTitle: FC<TWorkshopInfoProps> = ({ workshop }) => {
  const router = useRouter();

  const onDeleteWorkshop = async () => {
    if (confirm('本当に削除しますか？')) {
      await fetch('/workshops', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: workshop.id }),
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
      });
      router.push('/workshops');
    }
  };

  return (
    <WithTitleWrapper
      title={workshop.title}
      additionalElms={
        <div className="flex gap-1">
          <SvgLink
            href={`/workshops/${workshop.id}/edit`}
            ariaLabel="イベントの作成"
            svgName="edit"
            svgAlt="イベントの編集ボタン"
          />
          <button onClick={onDeleteWorkshop}>
            <SvgImage svgName="delete" svgAlt="イベントの削除ボタン" ariaLabel="イベントの削除ボタン" />
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
