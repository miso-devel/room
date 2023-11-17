import { AuthedNavbar } from '@/components/layout/AuthedNavbar';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

export default async function PageLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <main className="md:w-1/3 md:m-auto mx-5 text-secondary-content">
      {session !== null && <AuthedNavbar session={session} />}
      <div>{children}</div>
    </main>
  );
}
