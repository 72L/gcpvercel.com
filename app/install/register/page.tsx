import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { getVercelAccessToken } from '@/lib/vercel/getVercelAccessToken';
import getVercelUserTeamData from '@/lib/vercel/getVercelUserTeamData';

import { RegisterInstallation } from './RegisterInstallation';

export default async function Install({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  if (!searchParams.code) {
    redirect('/');
  }

  // exchange the code for an access token from Vercel
  const vercelCredentials = await getVercelAccessToken(searchParams.code);

  // Test token: Get user and team details from vercel
  const { team: vercelTeam, user: vercelUser } = await getVercelUserTeamData(
    vercelCredentials,
  );
  if (!vercelTeam.name || !vercelUser.email) {
    console.error('SetupError got:', vercelTeam, vercelUser);
    return NextResponse.json(
      { error: 'Unable to get team name or user email from Vercel.' },
      { status: 500 },
    );
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

  // redirect to sign in
  return (
    <RegisterInstallation
      vercelCredentials={vercelCredentials}
      installationId={vercelCredentials.installation_id}
      redirectTo="/install/serviceAccount"
    />
  );
}
