import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Make sure your project is added to the integration

When you're configuring GCP credentials for a new project, you may not see the project in the dropdown list. This is because the integration may not have access to the project.

To add the project to the integration, follow these steps:

1. Go to the [integrations page](https://vercel.com/dashboard/integrations) in Vercel. Click "Manage" next to the GCP integration to open the integration page.

2. Click "Manage Access" in the top right corner of the integration page.

3. Make sure the integration has access to your project. After you've given the integration access to your new project, you should be able to see the project in the dropdown list when you're configuring GCP credentials.

4. Configure the GCP credentials for your project by [adding the integration again](https://vercel.com/integrations/gcp/new)


`}</ReactMarkdown>
  );
}
