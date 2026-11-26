import qs from 'querystring';

import { VercelInstallation } from '@/types/vercel.types';

/**
 * Exchanges the OAuth authorization code for the installation details.
 *
 * The access_token returned by this exchange is intentionally discarded:
 * Vercel is deprecating long-lived tokens, and once they are expired this
 * token is short-lived too. All API calls use a token minted with the
 * client_credentials grant instead (see getShortLivedToken).
 */
export const exchangeCodeForInstallation = async (
  code: string,
): Promise<VercelInstallation | { error: unknown }> => {
  const result = await fetch('https://api.vercel.com/v2/oauth/access_token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    cache: 'no-store',
    body: qs.stringify({
      client_id: process.env.INTEGRATION_CLIENT_ID,
      client_secret: process.env.INTEGRATION_CLIENT_SECRET,
      code,

      // this parameter should match the Redirect URL in your integration settings on Vercel
      redirect_uri: process.env.INTEGRATION_REDIRECT_URI,
    }),
  });
  const tokenJson = await result.json();
  if ('error' in tokenJson || !tokenJson.installation_id) {
    console.error(
      'Install error:',
      tokenJson.error ?? 'missing installation_id',
    );
    return { error: tokenJson.error ?? 'missing installation_id' };
  }
  return {
    installation_id: tokenJson.installation_id,
    team_id: tokenJson.team_id ?? null,
    user_id: tokenJson.user_id,
  };
};
