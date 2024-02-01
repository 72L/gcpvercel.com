'use client';

import { useContext, useEffect } from 'react';

import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';

import { InstallationContext } from '@/app/install/layout';
import { VercelCredentials } from '@/types/vercel.types';

export const RegisterInstallation = ({
  vercelCredentials,
  installationId,
  redirectTo,
}: {
  vercelCredentials: VercelCredentials;
  installationId: string;
  redirectTo: string;
}) => {
  const context = useContext(InstallationContext);

  useEffect(() => {
    context.setVercelCredentials(vercelCredentials);
    context.setInstallationId(installationId);
  }, [vercelCredentials, installationId, context]);

  // redirect after both are set
  useEffect(() => {
    if (context.vercelCredentials && context.installationId) {
      redirect(redirectTo);
    }
  }, [context.vercelCredentials, context.installationId, redirectTo]);

  return (
    <div className="flex flex-row w-full h-full text-center items-center justify-center gap-2">
      <Loader2 className="animate-spin" /> Loading
    </div>
  );
};
