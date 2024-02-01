import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`
# Use GCP on Vercel: Documentation 

Welcome to the documentation for the Google Cloud Platform Vercel integration. Our integration allows you to
easily add Google Cloud Platform to your Vercel project.

## Why did we create this integration?

As developers who love Vercel, we also love Google Cloud Platform (GCP) because of the wide variety of products it offers. Not to mention, GCP has a generous free tier and introductory credits for new users.

However, it can be difficult to use Google Cloud Platform with Vercel because of the way credentials are handled by GCP. Instead of access token environment variables, GCP uses a service account key file. This is a JSON file that contains the credentials for your service account. This makes it difficult to use GCP with Vercel, because you cannot commit the service account key file to your repository and you cannot add it directly as an environment variable in Vercel.

Therefore, we wanted to make it easier to use some of the great products offered by GCP with Vercel. We created this integration to make it easy to access GCP from Vercel.

## Documentation structure

This documentation is broken up into several sections: 

First, the [Installation section](/docs/install) will walk you through the process of installing the integration into your Vercel project. 

Next, the [Usage section](/docs/usage) will walk you through the process of using the integration to deploy your Vercel project. 

The rest of the pages provide examples of how to use the integration with some of the most popular GCP products such as [Cloud Storage](/docs/cloud-storage), [BigQuery](/docs/bigquery), and [Pub/Sub](/docs/pub-sub).

    `}</ReactMarkdown>
  );
}
