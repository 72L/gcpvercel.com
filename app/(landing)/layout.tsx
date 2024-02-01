import { ReactNode } from 'react';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { classes } from '@/lib/classes';

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href} target="_blank">
      <div
        className={classes(
          'rounded px-3 py-1 hover:text-gray-800 text-gray-600',
          'transition-all',
          'flex flex-row gap-1 items-center',
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh flex flex-col overflow-y-scroll">
      {children}
      <div
        className={classes(
          'flex flex-row gap-2 text-sm flex-wrap justify-center items-center',
          'bg-white py-4 sm:py-8',
          'w-screen border-t',
        )}
      >
        <FooterLink href="/">
          <strong>Add GCP to Vercel</strong>
        </FooterLink>
        <FooterLink href="/docs">Docs</FooterLink>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
        <FooterLink href="https://vercel.com/integrations/gcp">
          Vercel Integration <ExternalLink size={14} />
        </FooterLink>
      </div>
    </div>
  );
}
