'use client';

import { useContext, useEffect } from 'react';

import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';

import { InstallationContext } from '@/app/install/layout';

export const RegisterInstallation = ({
  installationGrant,
  installationId,
  redirectTo,
}: {
  installationGrant: string;
  installationId: string;
  redirectTo: string;
}) => {
  const context = useContext(InstallationContext);

  useEffect(() => {
    context.setInstallationGrant(installationGrant);
    context.setInstallationId(installationId);
  }, [installationGrant, installationId, context]);

  // redirect after both are set
  useEffect(() => {
    if (context.installationGrant && context.installationId) {
      redirect(redirectTo);
    }
  }, [context.installationGrant, context.installationId, redirectTo]);

  return (
    <div className="flex flex-row w-full h-full text-center items-center justify-center gap-2">
      <Loader2 className="animate-spin" /> Loading
    </div>
  );
};
