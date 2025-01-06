import ReactMarkdown from 'react-markdown';

import { markdownComponents } from '@components/markdown/components';

export default function Page() {
  return (
    <ReactMarkdown components={markdownComponents}>{`

# Vertex AI

Vertex AI is a fully-managed, unified AI development platform for building and using generative AI. This example shows how to use [Vertex AI](https://cloud.google.com/vertex-ai) with a Next.js project hosted on Vercel.

## Configuration

Before using Vertex AI, GCP lists additional setup requirements in the [Vertex AI documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/reference/nodejs/latest). 

Make sure you have installed the Vercel integration as described in the [Installation](/docs/install) guide. You can install it directly from the [integration page](https://vercel.com/integrations/gcp/new).

You'll need the Vertex AI node.js client library (\`@google-cloud/vertex-ai\`). First, install it:

${'```sh'}
npm install @google-cloud/vertexai
${'```'}

## Credentials

After installing the Google Cloud Platform integration on Vercel, you can access the credentials using our helper function \`getGCPCredentials\`. See the [Usage section](/docs/usage) for more information.

## Example: Generating text

\`\`\`typescript
import { VertexAI } from '@google-cloud/vertexai';

const vertexAI = new VertexAI({
  project: process.env.GCP_PROJECT_ID, 
  location: process.env.GCP_REGION,
  googleAuthOptions: getGCPCredentials()
});

const generativeModel = vertexAI.getGenerativeModel({
  model: 'gemini-1.5-flash-001',
});

const prompt =
  "What's a good name for a flower shop that specializes in selling bouquets of dried flowers?";

const resp = await generativeModel.generateContent(prompt);
const contentResponse = await resp.response;
console.log(JSON.stringify(contentResponse));
\`\`\`


## Use cases for Vertex AI on Vercel

- **Text Generation:** Use Vertex AI to generate text for your Vercel application. This can be used for chatbots, customer support, or any other text-based application.

- **Image Generation:** Use Vertex AI to generate images for your Vercel application. This can be used for product images, marketing materials, or any other image-based application.

- **Translation:** Use Vertex AI to translate text for your Vercel application. This can be used for multilingual websites, customer support, or any other translation-based application.

- **Classification:** Use Vertex AI to classify text for your Vercel application. This can be used for sentiment analysis, spam detection, or any other classification-based application.

## Limitations

- Vertex AI is not available in all regions. See the [Vertex AI documentation](https://cloud.google.com/vertex-ai/docs) for more information.

## Further Reading

[Google Cloud Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)

[Google Cloud Vertex AI Node.js Client Library Documentation](https://googleapis.dev/nodejs/vertexai/latest/index.html)


`}</ReactMarkdown>
  );
}
