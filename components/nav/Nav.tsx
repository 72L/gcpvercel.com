'use client';

import { useEffect, useState } from 'react';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { classes } from '@/lib/classes';

import { NavLink } from './NavLink';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // reset open state when pathname changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="shrink-0 w-full sm:w-[300px] flex flex-col sm:border-r sm:h-screen">
      <div className="w-full flex flex-row justify-between border-b p-6">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image
              src="/logo-long.png"
              height={50}
              width={100}
              alt="logo"
              className="mb-2"
            />
          </Link>
          <div className="flex flex-row gap-1 text-lg items-center">
            <div className="font-medium">Use GCP on Vercel</div>
            <div className="text-gray-600">/ Docs</div>
          </div>
        </div>
        <div className="flex sm:hidden">
          {open ? (
            <X
              onClick={() => {
                setOpen(!open);
              }}
            />
          ) : (
            <Menu
              onClick={() => {
                setOpen(!open);
              }}
            />
          )}
        </div>
      </div>
      <div
        className={classes(
          open ? 'flex' : 'hidden md:flex',
          'flex-col',
          'border-b',
        )}
      >
        <NavLink href="/docs">Docs Home</NavLink>
        <NavLink href="/docs/install">Installation</NavLink>
        <NavLink href="/docs/usage">Usage</NavLink>
        <NavLink href="/docs/cloud-storage">Cloud Storage</NavLink>
        <NavLink href="/docs/pub-sub">Cloud Pub/Sub</NavLink>
        <NavLink href="/docs/bigquery">BigQuery</NavLink>
        <NavLink href="/docs/cloud-vision">Cloud Vision</NavLink>
        <NavLink href="/docs/vertex-ai">Vertex AI</NavLink>
      </div>
    </div>
  );
};
