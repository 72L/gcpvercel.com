import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import Button from '@components/form/Button';

export default function Page() {
  return (
    <div>
      <div className="text-3xl font-bold mt-8">
        You&apos;ll need a service account
      </div>
      <div className="text-gray-600 mt-4">
        A service account is a special type of Google account that belongs to
        your application instead of to an individual end user. You&apos;ll need
        service account credentials to allow your app on Vercel to access GCP
        services.
      </div>
      <div className="my-8 list-inside list-disc flex flex-col gap-6 text-gray-700">
        <div className="flex flex-row items-start gap-2">
          <CheckCircle2 className="text-gray-400" size={24} />
          <div className="inline">
            If you don&apos;t have a service account, create one following{' '}
            <Link
              href="https://cloud.google.com/iam/docs/service-accounts-create#creating"
              className="underline hover:text-sky-500 inline-flex flex-row items-center gap-1"
              target="_blank"
            >
              these instructions <ExternalLink size={13} />
            </Link>
            .
          </div>
        </div>

        <div className="flex flex-row items-start gap-2">
          <CheckCircle2 className="text-gray-400" size={24} />
          <div className="inline">
            Once you have a service account, create a JSON credentials file
            following{' '}
            <Link
              href="https://developers.google.com/workspace/guides/create-credentials#create_credentials_for_a_service_account"
              className="underline hover:text-sky-500 inline-flex flex-row items-center gap-1"
              target="_blank"
            >
              these instructions <ExternalLink size={13} />
            </Link>
            .
          </div>
        </div>
      </div>

      <Button href="/install/uploadKey" primary>
        <div className="flex flex-row items-center gap-2">
          Upload service account credentials <ArrowRight size={20} />
        </div>
      </Button>
    </div>
  );
}
