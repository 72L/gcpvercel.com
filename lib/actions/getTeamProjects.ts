'use server';

import { V4ProjectsResponse, VercelCredentials } from '@/types/vercel.types';

import { VercelError, vercelAPIRequest } from '../vercel/api';

export const getTeamProjects = async (vercelCredentials: VercelCredentials) => {
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
