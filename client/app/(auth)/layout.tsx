import { AppLayout } from '../../components/layout/AppLayout';
import { authOptions } from '../../lib/auth';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

export default async function PageLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return <main>{session && <AppLayout session={session}>{children}</AppLayout>}</main>;
}
