import { Session } from 'next-auth';
import Image from 'next/image';
import { FC } from 'react';

type TUserDropdownMenu = { session: Session };

export const UserDropdownMenu: FC<TUserDropdownMenu> = ({ session }) => {
  return <Image src={session?.user?.image as string} alt="me" width={50} height={50} className=" rounded-full" />;
};
