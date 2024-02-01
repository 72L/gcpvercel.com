'use client';

import { useContext } from 'react';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Button from '@components/form/Button';

import { InstallationContext } from '../layout';

export default function Page() {
  const { installationId } = useContext(InstallationContext);

  return (
    <div>
      <Link
        href="/install/uploadKey"
        className="flex flex-row items-center text-gray-500 text-sm"
      >
        <ArrowLeft size={14} />
        Go back
      </Link>
      <div className="text-3xl font-bold mt-4">
        Use your service account credentials
      </div>
      <div className="text-gray-600 my-4">
        We&apos;ve added your service account credentials to your Vercel project
        environment variables. In your code, access credentials like so:
      </div>
      <div className="text-xs h-[250px] overflow-scroll my-4 p-2 bg-gray-50">
        <SyntaxHighlighter
          language="javascript"
          style={stackoverflowLight}
          customStyle={{ background: 'transparent' }}
        >
          {`
export const getGCPCredentials = () => {
  // for Vercel, use environment variables
  return process.env.GOOGLE_PRIVATE_KEY
    ? {
        credentials: {
          client_email: process.env.GCLOUD_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
        },
        projectId: process.env.GCP_PROJECT_ID,
      }
      // for local development, use gcloud CLI
    : {};
};

// example for Google Cloud Storage
import { Storage } from '@google-cloud/storage';

export const storageClient = new Storage(getGCPCredentials());

const bucketName = 'my-bucket';
const fileName = 'my-file.json';
const file = storageClient.bucket(bucketName).file(fileName);

await file.save(JSON.stringify({
  foo: 'bar',
}), {
  contentType: 'application/json',
});


      `.trim()}
        </SyntaxHighlighter>
      </div>
      <div className="text-gray-600 my-4">
        For more examples, check out our documentation at{' '}
        <Link
          href="https://gcpvercel.com/docs/usage"
          target="_blank"
          className="text-blue-500"
        >
          https://gcpvercel.com/docs/usage
        </Link>
        .
      </div>
      <Button
        href={`https://vercel.com/dashboard/integrations/${installationId}/installed`}
      >
        Finish Setup
      </Button>
    </div>
  );
}
