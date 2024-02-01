import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Installing the Google Cloud Platform Vercel Integration

## Prerequisites

### Google Cloud Platform
Before you can install the Google Cloud Platform Vercel integration, you will need to have a Google Cloud Platform account. If you do not have a Google Cloud Platform account, you can create one [here](https://cloud.google.com/).

You'll also need to have a Google Cloud Platform project. If you do not have a Google Cloud Platform project, you can create one [here](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

In addition, you'll need to have a service account key file for your Google Cloud Platform project. If you do not have a service account key file, you can create one [here](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

### Vercel

You'll need to have a Vercel account and project. If you do not have a Vercel account, you can create one [here](https://vercel.com/).

## Installation

### Step 1: Add the integration to your Vercel project

To add the Google Cloud Platform Vercel integration to your Vercel project, Visit the [Google Cloud Platform Vercel integration page](https://vercel.com/integrations/gcp/new) and click the "Add Integration" button. Even if you've already installed the integration in another Vercel project, you'll need to repeat this step for each Vercel project you want to use GCP with.

### Step 2: Add the service account key file to your Vercel project

Once you've added the Google Cloud Platform Vercel integration to your Vercel project, you'll need to upload the service account key file during the installation setup. This allows the integration to extract the credentials from the service account key file and add them as environment variables to your Vercel project.

During setup, you'll also need to select the Vercel project you want to use GCP with. If you have multiple Vercel projects, you can add the integration to multiple projects by repeating the installation process for each project. If you don't see the Vercel project you want to use GCP with, you may need to [make sure the integration has access to your project](/docs/install/manage-project-access).

### Step 3: Finish the installation

Once you've uploaded the service account credentials key file and selected the Vercel project you want to use GCP with, click "Add Credentials" and the integration will be added to your Vercel project. You'll be provided with a few example code snippets that you can use to get started with using GCP in your Vercel project. To finish the installation, click "Finish Setup".

## Next Steps

Now that you've installed the Google Cloud Platform Vercel integration, you can start using GCP in your Vercel project. To learn how to use GCP with Vercel, visit the [Usage](/docs/usage) page.

`}</ReactMarkdown>
  );
}
