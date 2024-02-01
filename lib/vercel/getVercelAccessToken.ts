'use server';

import qs from 'querystring';

import { VercelCredentials } from '@/types/vercel.types';

export const getVercelAccessToken = async (code: string) => {
  // get access token
  const result = await fetch('https://api.vercel.com/v2/oauth/access_token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    body: qs.stringify({
      client_id: process.env.INTEGRATION_CLIENT_ID,
      client_secret: process.env.INTEGRATION_CLIENT_SECRET,
      code,

      // this parameter should match the Redirect URL in your integration settings on Vercel
      redirect_uri: process.env.INTEGRATION_REDIRECT_URI,
    }),
  });
  const tokenJson: VercelCredentials = await result.json();
  if ('error' in tokenJson) {
    console.error('Install error:', tokenJson);
  }
  return tokenJson;
};
