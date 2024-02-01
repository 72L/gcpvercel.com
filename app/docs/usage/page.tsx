import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Using Google Cloud Platform Credentials on Vercel

After installing the Google Cloud Platform Vercel integration, you can use the credentials in your Vercel project. The credentials are added as environment variables to your Vercel project. The environment variables are prefixed with \`GCP_\` to make it easy to identify them.

## Environment Variables

The integration automatically adds the following environment variables to your Vercel project:

- \`GCP_PROJECT_ID\`: The ID of your Google Cloud Platform project.

- \`GCP_SERVICE_ACCOUNT_EMAIL\`: The email address of the service account.

- \`GCP_PRIVATE_KEY\`: The private key of the service account.

## Accessing Credentials

To access the credentials, on Vercel, you can use the \`process.env\` object. For example, to access the \`GCP_PROJECT_ID\` environment variable, you can use \`process.env.GCP_PROJECT_ID\`.

We've created a helper function to make it easier to access the credentials. You can use the following function to access the credentials and call this function directly from most Google Cloud Platform client libraries (see example [below](#example)):

\`\`\`javascript
export const getGCPCredentials = () => {
  // for Vercel, use environment variables
  return process.env.GCP_PRIVATE_KEY
    ? {
        credentials: {
          client_email: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GCP_PRIVATE_KEY,
        },
        projectId: process.env.GCP_PROJECT_ID,
      }
      // for local development, use gcloud CLI
    : {};
};
\`\`\`

This function will return the credentials if they are available in the environment variables. If they are not available, it will return an empty object. This allows you to use the same code for local development and production. [Locally](#local-development), you can use the \`gcloud\` CLI to authenticate with Google Cloud Platform so you don't need to add the credentials to your local environment variables.

## Example

Here is an example of how to use the \`getGCPCredentials\` credentials function with the Google Cloud Storage SDK for Node.js \`@google-cloud/storage\`:

\`\`\`typescript
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
\`\`\`

## Local Development

If you are developing locally, you can use the \`gcloud\` CLI to authenticate with Google Cloud Platform. You can learn more about how to authenticate with \`gcloud\` locally [here](https://cloud.google.com/sdk/docs/initializing).


`}</ReactMarkdown>
  );
}
