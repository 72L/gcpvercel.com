import qs from 'querystring';

// Short-lived (1 hour) Vercel access tokens via the client_credentials grant.
// https://vercel.com/docs/integrations/create-integration/short-lived-access-tokens

// reuse a cached token while it has more than this much life left
const MIN_REMAINING_MS = 5 * 60 * 1000;

interface CachedToken {
  access_token: string;
  team_id: string | null;
  expiresAt: number;
}

const cache = new Map<string, CachedToken>();
const inflight = new Map<string, Promise<CachedToken>>();

const requestToken = async (installationId: string): Promise<CachedToken> => {
  const clientId = process.env.INTEGRATION_CLIENT_ID;
  const clientSecret = process.env.INTEGRATION_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error(
      'INTEGRATION_CLIENT_ID / INTEGRATION_CLIENT_SECRET not set',
    );
  }

  const res = await fetch('https://api.vercel.com/v2/oauth/access_token', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`,
      ).toString('base64')}`,
    },
    body: qs.stringify({
      grant_type: 'client_credentials',
      installation_id: installationId,
    }),
  });
  const json = await res.json();
  if (!res.ok || json.error || !json.access_token) {
    // never log the token itself; error bodies don't contain one
    console.error('client_credentials token request failed:', res.status, json);
    throw new Error(
      json?.error?.message || 'Unable to get an access token from Vercel.',
    );
  }

  return {
    access_token: json.access_token,
    team_id: json.team_id ?? null,
    expiresAt: Date.now() + (json.expires_in ?? 3600) * 1000,
  };
};

export const getShortLivedToken = async (
  installationId: string,
): Promise<{ access_token: string; team_id: string | null }> => {
  const cached = cache.get(installationId);
  if (cached && cached.expiresAt - Date.now() > MIN_REMAINING_MS) {
    return cached;
  }

  // dedupe concurrent requests for the same installation
  let pending = inflight.get(installationId);
  if (!pending) {
    pending = requestToken(installationId).finally(() =>
      inflight.delete(installationId),
    );
    inflight.set(installationId, pending);
  }
  const token = await pending;
  cache.set(installationId, token);
  return token;
};
