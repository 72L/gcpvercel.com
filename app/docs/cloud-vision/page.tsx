import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Using Google Cloud Vision on Vercel

Google Cloud Vision is a machine learning service that allows you to analyze images and videos for content. This example shows how to use [Google Cloud Vision](https://cloud.google.com/vision) with a Next.js project hosted on Vercel.

## Configuration

Make sure you have installed the Vercel integration as described in the [Installation](/docs/install) guide. You can install it directly from the [integration page](https://vercel.com/integrations/gcp/new).

You'll need the Google Cloud Vision node.js client library (\`@google-cloud/vision\`). First, install it:

${'```sh'}
npm install @google-cloud/vision
${'```'}

## Credentials

After installing the Google Cloud Platform integration on Vercel, you can access the credentials using our helper function \`getGCPCredentials\`. See the [Usage section](/docs/usage) for more information.

## Example: Analyzing an image

The following code shows how to analyze an image using Google Cloud Vision:

\`\`\`typescript
import { ImageAnnotatorClient } from '@google-cloud/vision';

export const visionClient = new ImageAnnotatorClient(getGCPCredentials());

const [result] = await visionClient.labelDetection('https://example.com/image.jpg');

const labels = result.labelAnnotations;
console.log('Labels:');
labels.forEach((label) => console.log(label.description));
\`\`\`

## Example: Analyzing a video

The following code shows how to analyze a video using Google Cloud Vision:

\`\`\`typescript
import { VideoIntelligenceServiceClient } from '@google-cloud/video-intelligence';

export const videoClient = new VideoIntelligenceServiceClient(getGCPCredentials());

const [operation] = await videoClient.annotateVideo({
  inputUri: 'gs://my-bucket/my-video.mp4',
  features: ['LABEL_DETECTION'],
});

const [operationResult] = await operation.promise();

const labels = operationResult.annotationResults[0].segmentLabelAnnotations;
console.log('Labels:');
labels.forEach((label) => console.log(label.entity.description));
\`\`\`

## Use cases for Google Cloud Vision on Vercel

- **Image Recognition:** Use Google Cloud Vision to recognize objects, people, text, and more in your Vercel applications. Analyze images and videos to extract valuable information and enhance user experience.

- **Content Moderation:** Utilize Google Cloud Vision to moderate content in your Vercel applications. Detect inappropriate content and take action to protect your users and brand.

- **Image Search:** Set up Google Cloud Vision to enable image search in your Vercel applications. Use image content to search for similar images or products and enhance user experience.

## Limitations

- Google Cloud Vision is not available in all regions. See the [Google Cloud Vision documentation](https://cloud.google.com/vision/docs) for more information.

## Further Reading

[Google Cloud Vision Documentation](https://cloud.google.com/vision/docs)

[Google Cloud Vision Node.js Client Library Documentation](https://googleapis.dev/nodejs/vision/latest/index.html)


`}</ReactMarkdown>
  );
}
