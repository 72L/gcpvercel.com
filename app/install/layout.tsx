'use client';

import { ReactNode, createContext, useState } from 'react';

import { Toaster } from 'sonner';

import { classes } from '@/lib/classes';

interface IInstallationContext {
  installationGrant: string | null;
  setInstallationGrant: (installationGrant: string) => void;
  installationId: string | null;
  setInstallationId: (installationId: string) => void;
}

export const InstallationContext = createContext<IInstallationContext>({
  installationGrant: null,
  setInstallationGrant: () => {},
  installationId: null,
  setInstallationId: () => {},
});

const InstallationContextProvider = ({ children }: { children: ReactNode }) => {
  const [installationGrant, setInstallationGrant] = useState<string | null>(
    null,
  );
  const [installationId, setInstallationId] = useState<string | null>(null);

  return (
    <InstallationContext.Provider
      value={{
        installationGrant,
        setInstallationGrant,
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
