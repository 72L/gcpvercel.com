import { redirect } from 'next/navigation';

import { exchangeCodeForInstallation } from '@/lib/vercel/exchangeCodeForInstallation';
import { getShortLivedToken } from '@/lib/vercel/getShortLivedToken';
import getVercelUserTeamData from '@/lib/vercel/getVercelUserTeamData';
import { createInstallationGrant } from '@/lib/vercel/installationGrant';

import { RegisterInstallation } from './RegisterInstallation';

export default async function Install({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  if (!searchParams.code) {
    redirect('/');
  }

  // exchange the code for installation details (its access token is discarded)
  const installation = await exchangeCodeForInstallation(searchParams.code);
  if ('error' in installation) {
    throw new Error('Unable to complete installation with Vercel.');
  }

  // request a short-lived token via client_credentials for all API calls
  const vercelCredentials = await getShortLivedToken(
    installation.installation_id,
  );

  // Test token: Get user and team details from vercel
  const { team: vercelTeam, user: vercelUser } = await getVercelUserTeamData(
    vercelCredentials,
  );
  if (!vercelTeam.name || !vercelUser.email) {
    console.error('SetupError got:', vercelTeam, vercelUser);
    throw new Error('Unable to get team name or user email from Vercel.');
  }

  console.log(
    `Installed for ${JSON.stringify({
      user: {
        email: vercelUser.email,
        name: vercelUser.name,
        vercelId: vercelUser.uid,
      },
      team: {
        name: vercelTeam.name,
        vercelId: vercelTeam.id,
      },
    })}`,
  );

  // the client only receives a signed, short-lived grant — never a token
  return (
    <RegisterInstallation
      installationGrant={createInstallationGrant(
        installation.installation_id,
        installation.team_id,
      )}
      installationId={installation.installation_id}
      redirectTo="/install/serviceAccount"
    />
  );
}
