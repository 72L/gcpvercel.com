import { InstallingUser, TeamLimited } from '@/types/vercel.types';

import { vercelAPIRequest } from './api';

export default async function getVercelUserTeamData(tokenJson: any) {
  // get user data from Vercel
  const data = await vercelAPIRequest({
    credentials: tokenJson,
    endpoint: 'www/user',
  });

  const userData = data as {
    user: InstallingUser;
  };

  return {
    team: tokenJson.team_id
      ? ((await vercelAPIRequest({
          credentials: tokenJson,
          endpoint: `v2/teams/${tokenJson.team_id}`,
        })) as TeamLimited)
      : {
          name:
            userData.user.name || userData.user.username || userData.user.email,
          id: null,
        },
    user: userData.user,
  };
}
