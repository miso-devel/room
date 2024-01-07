import { AppLayout } from '../../components/layout/AppLayout';

import { ReactNode } from 'react';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AppLayout>{children}</AppLayout>
    </main>
  );
}
