'use server';

import { AddedEnvVarResponse, VercelCredentials } from '@/types/vercel.types';

import { VERCEL_METHODS, VercelError, vercelAPIRequest } from '../vercel/api';

export const addServiceAccountToProject = async (args: {
  vercelCredentials: VercelCredentials;
  serviceAccountKey: string;
  projectId: string;
}) => {
  const serviceAccountKey = JSON.parse(args.serviceAccountKey);
  const {
    client_email: clientEmail,
    private_key: privateKey,
    project_id: projectId,
  } = serviceAccountKey;

  const addEnvVar = async (
    key: string,
    value: string,

    type:
      | 'encrypted' // appears as password in Vercel UI
      | 'sensitive' // not visible to user in Vercel UI
      | 'plain', // visible to user in Vercel UI
  ) => {
    const res = await vercelAPIRequest<AddedEnvVarResponse>({
      credentials: args.vercelCredentials,
      endpoint: `v10/projects/${args.projectId}/env`,
      method: VERCEL_METHODS.POST,
      params: new URLSearchParams({
        upsert: 'true',
      }),
      body: JSON.stringify({
        key,
        value,
        type,
        target: ['production', 'preview'],
      }),
    });
    return res;
  };

  // add environment variable to vercel project
  const res = await Promise.all([
    addEnvVar('GCP_PRIVATE_KEY', privateKey, 'sensitive'),
    addEnvVar('GCP_SERVICE_ACCOUNT_EMAIL', clientEmail, 'encrypted'),
    addEnvVar('GCP_PROJECT_ID', projectId, 'plain'),
  ]);

  // if any have error, throw error
  const errors = res.filter(
    (r): r is VercelError => !!(r as VercelError).error,
  );
  if (errors.length) {
    const errorMessage = errors.map((e) => e.error.message).join('\n');
    console.error(errorMessage);
    return { error: errorMessage };
  }

  return res;
};
