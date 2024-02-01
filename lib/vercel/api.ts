export const VERCEL_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
};

interface VercelAPIRequestInputs {
  credentials: { access_token: string; team_id: string | null };
  endpoint: string;
  body?: any;
  headers?: any;
  method?: string;
  verbose?: boolean;
  params?: URLSearchParams;
  suppressErrors?: boolean;
  suppressErrorIf?: (resp: any) => boolean;
}

export interface VercelError {
  error: {
    code: string;
    message: string;
  };
}

export const vercelAPIRequest = <T>({
  credentials,
  endpoint,
  body,
  headers,
  method = VERCEL_METHODS.GET,
  verbose = process.env.NEXT_PUBLIC_ENV === 'local',
  params = new URLSearchParams(),
}: VercelAPIRequestInputs): Promise<T | VercelError> => {
  if (credentials.team_id) params.append('teamId', credentials.team_id);
  const url = `https://api.vercel.com/${endpoint}?${params.toString()}`;
  const options = {
    headers: {
      Authorization: `Bearer ${credentials.access_token}`,
      ...headers,
    },
    method,
    body,
  };
  if (verbose) console.log('Vercel API req:', url, options);
  return (
    fetch(url, options)
      // json parse
      .then((res): any => {
        if (method === VERCEL_METHODS.DELETE && res.status === 204) {
          return {};
        }
        if (verbose) console.log('Vercel API res:', res.status, res.statusText);
        return res.json();
      })
  );
};
