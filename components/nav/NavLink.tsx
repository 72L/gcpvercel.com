'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { classes } from '@/lib/classes';

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const active = path === href;

  return (
    <Link
      className={classes(
        `text-gray-500 hover:bg-gray-50`,
        active && 'text-gray-800 font-semibold',
        'px-6 py-3',
        'rounded',
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
