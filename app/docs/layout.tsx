import { ReactNode } from 'react';

import { Nav } from '@components/nav/Nav';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen">
      <Nav />
      <div className="flex flex-col py-6 lg:py-12 px-6 lg:px-24 grow overflow-y-scroll sm:h-screen pb-[20vh]">
        {children}
      </div>
    </div>
  );
}
