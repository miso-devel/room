import { ReactNode } from 'react';
import { WithTitleWrapper } from '../../../components/layout/WithTitleWrapper';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return (
    <WithTitleWrapper title="メンバー一覧">
      <p className="mb-5">一旦メンバー一覧とかは取れなくてもいい気がするので実装はしていない</p>
      {children}
    </WithTitleWrapper>
  );
}
