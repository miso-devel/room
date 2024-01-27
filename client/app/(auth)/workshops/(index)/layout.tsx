import { ReactNode } from 'react';
import { SvgLink } from '../../../../components/ui/Link/SvgLink';
import { WithTitleWrapper } from '../../../../components/layout/WithTitleWrapper';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return (
    <WithTitleWrapper
      title="勉強会一覧"
      additionalElms={<SvgLink href="/workshops/new" ariaLabel="勉強会作成" svgName="add" svgAlt="勉強会作成ボタン" />}
    >
      {children}
    </WithTitleWrapper>
  );
}
