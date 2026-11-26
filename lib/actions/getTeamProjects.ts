'use server';

import { V4ProjectsResponse } from '@/types/vercel.types';

import { VercelError, vercelAPIRequest } from '../vercel/api';
import { credentialsFromGrant } from '../vercel/credentialsFromGrant';

export const getTeamProjects = async (installationGrant: string) => {
  const vercelCredentials = await credentialsFromGrant(installationGrant);
  const res = await vercelAPIRequest<
    | V4ProjectsResponse
    | {
        error: {
          code: string;
          message: string;
        };
      }
  >({
    credentials: vercelCredentials,
    endpoint: 'v9/projects',
    verbose: true,
  });
  if ((res as VercelError).error) {
    throw new Error((res as VercelError).error.message);
  }
  const resNoError = res as V4ProjectsResponse;
  if (resNoError.projects)
    return resNoError.projects.map((project) => ({
      name: project.name,
      id: project.id,
    }));
  return [];
};
