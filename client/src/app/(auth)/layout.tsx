import { HomeLogo, LearningLogo, MemberLogo } from '@/components/ui/svg';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
export default async function PageLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <main className="w-2/3 m-auto text-secondary-content">
      <div className="navbar my-5 bg-secondary rounded-md">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Doer
          </a>
        </div>
        <div className="flex-none">
          <div className="flex pr-3">
            <a href="/home" className="btn-ghost p-2 rounded-full">
              <HomeLogo />
            </a>
            <a href="/members" className="btn-ghost p-2 rounded-full">
              <MemberLogo />
            </a>
            <a href="/workshop" className="btn-ghost p-2 rounded-full">
              <LearningLogo />
            </a>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={session?.user?.image as string} alt="me" width={50} height={50} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-md w-52 bg-secondary"
            >
              <li>
                <a className="justify-between">{session?.user?.name ?? ''}</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </main>
  );
}
