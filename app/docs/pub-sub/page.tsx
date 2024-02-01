import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Using Google Cloud Pub/Sub on Vercel

Google Cloud Pub/Sub is a fully-managed real-time messaging service that allows you to send and receive messages between independent applications. This example shows how to use [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) with a Next.js project hosted on Vercel.

## Configuration

Make sure you have installed the Vercel integration as described in the [Installation](/docs/install) guide. You can install it directly from the [integration page](https://vercel.com/integrations/gcp/new).

You'll need the Google Cloud Pub/Sub node.js client library (\`@google-cloud/pubsub\`). First, install it:

${'```sh'}
npm install @google-cloud/pubsub
${'```'}

## Credentials

After installing the Google Cloud Platform integration on Vercel, you can access the credentials using our helper function \`getGCPCredentials\`. See the [Usage section](/docs/usage) for more information.

## Example: Publishing a message

To publish a message to Google Cloud Pub/Sub, you need to create a topic. Create a topic using the [Google Cloud Console](https://console.cloud.google.com/cloudpubsub/topicList) or another method. You can then use the following code to publish a message to the topic:

\`\`\`typescript
import { PubSub } from '@google-cloud/pubsub';

export const pubsubClient = new PubSub(getGCPCredentials());

const topicName = 'my-topic';
const data = JSON.stringify({
  foo: 'bar',
});

await pubsubClient.topic(topicName).publish(data);
\`\`\`

## Example: Subscribing to a topic

To subscribe to a topic, you need to create a subscription. Create a subscription using the [Google Cloud Console](https://console.cloud.google.com/cloudpubsub/subscriptionList) or another method. You can then use the following code to subscribe to the topic:

\`\`\`typescript
import { PubSub } from '@google-cloud/pubsub';

export const pubsubClient = new PubSub(getGCPCredentials());

const topicName = 'my-topic';
const subscriptionName = 'my-subscription';

const [subscription] = await pubsubClient.topic(topicName).createSubscription(subscriptionName);

subscription.on('message', (message) => {
  console.log(message.data.toString());
  message.ack();
});
\`\`\`

## Use cases for Google Cloud Pub/Sub on Vercel

- **Real-time Notifications:** Utilize Google Cloud Pub/Sub to enable real-time notifications within your Vercel applications. Set up Pub/Sub topics for events like user registrations or updates. Subscribers receive instant notifications, enhancing user engagement.

- **Asynchronous Processing:** Queue and process non-time-sensitive tasks asynchronously in your Vercel application using Google Cloud Pub/Sub. Subscribers consume messages and process tasks independently, avoiding delays in the main application flow.

- **Integration with Microservices:** Integrate Google Cloud Pub/Sub as a communication channel between microservices in your Vercel application ecosystem. Services publish events and others subscribe to take relevant actions or maintain consistent data.

- **Logging and Monitoring:** Centralize and distribute logs and monitoring events using Google Cloud Pub/Sub. Collect real-time application data, errors, and performance metrics for analysis, optimization, and issue identification.

- **Webhooks and Integrations:** Set up Google Cloud Pub/Sub to handle incoming webhooks or integrate with third-party services in your Vercel application. Receive external API data via Pub/Sub topics and trigger actions within your application.


## Limitations

- Pub/Sub is not available in all regions. See the [Google Cloud Pub/Sub documentation](https://cloud.google.com/pubsub/docs/overview) for more information.

## Further Reading

[Google Cloud Pub/Sub Documentation](https://cloud.google.com/pubsub/docs)

[Google Cloud Pub/Sub Node.js Client Library Documentation](https://googleapis.dev/nodejs/pubsub/latest/index.html)


`}</ReactMarkdown>
  );
}
