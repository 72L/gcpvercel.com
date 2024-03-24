import { ReactNode } from 'react';

import { Nav } from '@components/nav/Nav';
import { Sponsors } from '@components/sponsors/Sponsors';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen">
      <Nav />
      <div className="flex flex-col gap-12 justify-between pt-6 lg:pt-12 grow overflow-y-scroll sm:min-h-screen pb-[20vh] h-full">
        <div className="px-6 lg:px-24">{children}</div>
        <Sponsors />
      </div>
    </div>
  );
}
