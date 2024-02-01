import { ReactNode } from 'react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center">
      <div className="max-w-prose">{children}</div>
    </div>
  );
}
