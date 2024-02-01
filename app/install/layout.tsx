'use client';

import { ReactNode, createContext, useState } from 'react';

import { Toaster } from 'sonner';

import { classes } from '@/lib/classes';
import { VercelCredentials } from '@/types/vercel.types';

interface IInstallationContext {
  vercelCredentials: VercelCredentials | null;
  setVercelCredentials: (vercelCredentials: VercelCredentials) => void;
  installationId: string | null;
  setInstallationId: (installationId: string) => void;
}

export const InstallationContext = createContext<IInstallationContext>({
  vercelCredentials: null,
  setVercelCredentials: () => {},
  installationId: null,
  setInstallationId: () => {},
});

const InstallationContextProvider = ({ children }: { children: ReactNode }) => {
  const [vercelCredentials, setVercelCredentials] =
    useState<VercelCredentials | null>(null);
  const [installationId, setInstallationId] = useState<string | null>(null);

  return (
    <InstallationContext.Provider
      value={{
        vercelCredentials,
        setVercelCredentials,
        installationId,
        setInstallationId,
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div
          className={classes(
            'w-full h-full max-w-[800px] max-h-[599px]',
            'p-1',
          )}
        >
          <div className="border w-full h-full rounded p-12">{children}</div>
        </div>
      </div>
      {/* only works on client side */}
      <Toaster />
    </InstallationContext.Provider>
  );
};

export default InstallationContextProvider;
