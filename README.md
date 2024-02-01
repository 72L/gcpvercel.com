# Google Cloud Platform on Vercel

This is a Vercel integration that helps developers access Google Cloud Platform by storing GCP credentials as sensitive environment variables in the Vercel project.

- Vercel Integration: [https://vercel.com/integrations/gcp](https://vercel.com/integrations/gcp)
- Website: [https://www.gcpvercel.com/](https://www.gcpvercel.com/)
- Docs: [https://www.gcpvercel.com/docs](https://www.gcpvercel.com/docs)

## Privacy
Vercel access tokens and GCP credentials are not persisted beyond the limited lifetime of the frontend React context. Google Cloud Platform credentials are uploaded directly to Vercel, and this project does not store or retain access. 

Therefore, users will need to install this integration from the Vercel [integration listing](https://vercel.com/integrations/gcp) every time they want to use it. Multiple installations of this integration to the same Vercel project does not create duplicates. 

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.