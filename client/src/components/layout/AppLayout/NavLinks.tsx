'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

type TNavLink = { link: string; text: string; isCurrent: boolean };

const paths = [
  { name: '/home', text: 'HOME' },
  { name: '/members', text: 'MEMBER' },
  { name: '/workshops', text: 'WORKSHOP' },
];

const NavLink: FC<TNavLink> = ({ link, text, isCurrent }) => {
  return (
    <a
      href={link ?? ''}
      className={`p-2 font-medium transition-all rounded-md ${
        isCurrent ? 'text-accent cursor-not-allowed' : 'hover:opacity-70'
      }`}
    >
      {text}
    </a>
  );
};

export const NavLinks: FC = () => {
  const pathname = usePathname();
  return (
    <>
      {paths.map((path) => (
        <NavLink key={path.name} link={path.name} text={path.text} isCurrent={pathname === path.name} />
      ))}
    </>
  );
};
