import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Using BigQuery with Vercel

Google BigQuery is a fully-managed data warehouse that allows you to store and query large datasets. This example shows how to use [Google BigQuery](https://cloud.google.com/bigquery) with a Next.js project hosted on Vercel.

## Configuration

Make sure you have installed the Vercel integration as described in the [Installation](/docs/install) guide. You can install it directly from the [integration page](https://vercel.com/integrations/gcp/new).

You'll need the Google Cloud BigQuery node.js client library (\`@google-cloud/bigquery\`). First, install it:

${'```sh'}
npm install @google-cloud/bigquery
${'```'}

## Credentials

After installing the Google Cloud Platform integration on Vercel, you can access the credentials using our helper function \`getGCPCredentials\`. See the [Usage section](/docs/usage) for more information.

## Example: Querying a table

To query a table in Google BigQuery, you need to create a dataset and a table. Create a dataset and table using the [Google Cloud Console](https://console.cloud.google.com/bigquery/table) or another method. You can then use the following code to query the table:

\`\`\`typescript
import { BigQuery } from '@google-cloud/bigquery';

export const bigqueryClient = new BigQuery(getGCPCredentials());

const query = 'SELECT * FROM \`my-project.my-dataset.my-table\` LIMIT 100';

const [rows] = await bigqueryClient.query(query);

rows.forEach((row) => {
  console.log(row);
});
\`\`\`

## Example: Loading data into a table from csv

To load data into a table in Google BigQuery, you need to create a dataset and a table. Create a dataset and table using the [Google Cloud Console](https://console.cloud.google.com/bigquery/table) or another method. You can then use the following code to load data into the table:

\`\`\`typescript
import { BigQuery } from '@google-cloud/bigquery';

export const bigqueryClient = new BigQuery(getGCPCredentials());

const datasetName = 'my-dataset';
const tableName = 'my-table';

const [job] = await bigqueryClient
  .dataset(datasetName)
  .table(tableName)
  .load('./data.csv');

const [rows] = await job.getQueryResults();

rows.forEach((row) => {
  console.log(row);
});
\`\`\`

## Use cases for Google BigQuery on Vercel

- **Data warehousing:** Google BigQuery can be utilized on Vercel for efficient data warehousing. You can store large volumes of structured and semi-structured data, perform complex queries, and aggregate information from various sources. This is particularly useful for businesses that need to manage and analyze extensive datasets without investing heavily in on-premises infrastructure.

- **Machine learning:** Google BigQuery can play a crucial role in supporting machine learning initiatives on the Vercel platform. You can use BigQuery to store and preprocess data that's used for training machine learning models. Additionally, you can leverage BigQuery's powerful querying capabilities to extract features, create training datasets, and perform data transformations. This integration enables you to build and deploy machine learning models that improve user experiences and provide personalized recommendations within your Vercel applications.

## Further Reading

[Google Cloud BigQuery Documentation](https://cloud.google.com/bigquery/docs)

[Google Cloud BigQuery Node.js Client Library Documentation](https://googleapis.dev/nodejs/bigquery/latest/index.html)



`}</ReactMarkdown>
  );
}
