'use client';

import { useRouter } from 'next/navigation';
import { SvgLink } from '../../../../../../../components/ui/Link/SvgLink';
import { SvgImage } from '../../../../../../../components/ui/Image/SvgImage';
import { FC } from 'react';

type TWorkshopDeleteButton = FC<{ workshopId: string }>;

export const WorkshopDeleteButton: TWorkshopDeleteButton = ({ workshopId }) => {
  const router = useRouter();

  const onDeleteWorkshop = async () => {
    if (confirm('本当に削除しますか？')) {
      await fetch('/workshops', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: workshopId }),
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
      });
      router.push('/workshops');
    }
  };

  return (
    <div className="flex gap-1">
      <SvgLink
        href={`/workshops/${workshopId}/edit`}
        ariaLabel="イベントの作成"
        svgName="edit"
        svgAlt="イベントの編集ボタン"
      />
      <button onClick={onDeleteWorkshop}>
        <SvgImage svgName="delete" svgAlt="イベントの削除ボタン" ariaLabel="イベントの削除ボタン" />
      </button>
    </div>
  );
};
