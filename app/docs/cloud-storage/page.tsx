import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Using Google Cloud Storage on Vercel

Google Cloud Storage is an object storage service that lets you store and serve data on Google's infrastructure. This example shows how to use [Google Cloud Storage](https://cloud.google.com/storage) with a Next.js project hosted on Vercel.

## Configuration

Make sure you have installed the Vercel integration as described in the [Installation](/docs/install) guide. You can install it directly from the [integration page](https://vercel.com/integrations/gcp/new).

You'll need the Google Cloud Storage node.js client library (\`@google-cloud/storage\`). First, install it:

${'```sh'}
npm install @google-cloud/storage
${'```'}

## Credentials

After installing the Google Cloud Platform integration on Vercel, you can access the credentials using our helper function \`getGCPCredentials\`. See the [Usage section](/docs/usage) for more information.

## Example: Uploading a JSON file

To upload a file to Google Cloud Storage, you need to create a bucket. Create a bucket using the [Google Cloud Console](https://console.cloud.google.com/storage/browser) or another method. You can then use the following code to upload JSON data to the bucket:

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

## Example: Downloading a JSON file

\`\`\`typescript
import { Storage } from '@google-cloud/storage';

export const storageClient = new Storage(getGCPCredentials());

const bucketName = 'my-bucket';
const fileName = 'my-file.json';
const file = storageClient.bucket(bucketName).file(fileName);

const [data] = await file.download();

console.log(JSON.parse(data.toString()));

\`\`\`

## Use cases for Google Cloud Storage on Vercel

- **Static Asset Hosting:** Google Cloud Storage can serve as a reliable and scalable platform to host static assets for your Vercel applications. You can store images, videos, CSS files, JavaScript libraries, and other assets on Google Cloud Storage buckets. This helps offload the serving of these assets from your Vercel server, resulting in faster load times for your users.

- **Backup and Data Archiving:** Google Cloud Storage offers secure and cost-effective storage options, making it an excellent choice for backing up and archiving data from your Vercel applications. You can store application backups, logs, and historical data in Google Cloud Storage buckets, ensuring data durability and easy retrieval when needed.

- **User-generated Content:** If your Vercel application allows users to upload content, such as images, documents, or media files, you can use Google Cloud Storage to store and manage this user-generated content. This approach ensures that your application's server remains focused on handling user interactions and logic, while the storage of uploaded files is efficiently managed by Google Cloud Storage.

- **Integration with Data Processing Pipelines:** If your Vercel application involves data processing, ETL (Extract, Transform, Load) pipelines, or data analysis, Google Cloud Storage can act as a landing zone for your data. You can store raw or processed data in Google Cloud Storage buckets, allowing other services in the Google Cloud ecosystem, such as BigQuery or Dataflow, to efficiently process and analyze this data.

## Further Reading

[Google Cloud Storage Documentation](https://cloud.google.com/storage/docs)

[Google Cloud Storage Node.js Client Library Documentation](https://googleapis.dev/nodejs/storage/latest/index.html)


`}</ReactMarkdown>
  );
}
