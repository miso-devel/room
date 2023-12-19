import { ReactNode } from 'react';
import { WithTitleWrapper } from '../../../../components/layout/WithTitleWrapper';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return <WithTitleWrapper title="イベント一覧">{children}</WithTitleWrapper>;
}
