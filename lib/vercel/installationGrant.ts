import { createHmac, timingSafeEqual } from 'crypto';

// The browser never holds a Vercel access token. After the OAuth code
// exchange, it receives a signed, short-lived "installation grant" that proves
// this session completed the install for a given installation. Server actions
// verify the grant and then mint a short-lived token via client_credentials.

const GRANT_TTL_SECONDS = 60 * 60;

interface InstallationGrant {
  installationId: string;
  teamId: string | null;
  exp: number;
}

const signingKey = () => {
  const secret = process.env.INTEGRATION_CLIENT_SECRET;
  if (!secret) throw new Error('INTEGRATION_CLIENT_SECRET is not set');
  // derive a purpose-specific key instead of using the client secret directly
  return createHmac('sha256', secret).update('installation-grant-v1').digest();
};

const sign = (payload: string) =>
  createHmac('sha256', signingKey()).update(payload).digest('base64url');

export const createInstallationGrant = (
  installationId: string,
  teamId: string | null,
): string => {
  const grant: InstallationGrant = {
    installationId,
    teamId,
    exp: Math.floor(Date.now() / 1000) + GRANT_TTL_SECONDS,
  };
  const payload = Buffer.from(JSON.stringify(grant)).toString('base64url');
  return `${payload}.${sign(payload)}`;
};

export const verifyInstallationGrant = (token: string): InstallationGrant => {
  const [payload, signature] = token?.split('.') ?? [];
  if (!payload || !signature) throw new Error('Invalid installation session.');

  const expected = Buffer.from(sign(payload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    throw new Error('Invalid installation session.');
  }

  const grant: InstallationGrant = JSON.parse(
    Buffer.from(payload, 'base64url').toString(),
  );
  if (grant.exp < Math.floor(Date.now() / 1000)) {
    throw new Error(
      'Installation session expired. Please reinstall the integration from Vercel.',
    );
  }
  return grant;
};
