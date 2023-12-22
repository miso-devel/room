import { FC, ReactNode } from 'react';
import { WithTitleWrapper } from '../../../../../../../components/layout/WithTitleWrapper';
import { schema } from '../../../../../../../types/common';

type TWorkshopInfoProps = { workshop: schema['Workshop']; children: ReactNode };

export const WorkshopEditPageTitle: FC<TWorkshopInfoProps> = ({ workshop, children }) => {
  return <WithTitleWrapper title={'編集中：' + workshop.title}>{children}</WithTitleWrapper>;
};
