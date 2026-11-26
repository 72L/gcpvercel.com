import { VercelCredentials } from '@/types/vercel.types';

import { getShortLivedToken } from './getShortLivedToken';
import { verifyInstallationGrant } from './installationGrant';

/** Verifies a signed installation grant and returns a short-lived API token for it. */
export const credentialsFromGrant = async (
  installationGrant: string,
): Promise<VercelCredentials> => {
  const { installationId } = verifyInstallationGrant(installationGrant);
  return getShortLivedToken(installationId);
};
