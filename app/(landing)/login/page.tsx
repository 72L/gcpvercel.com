import Image from 'next/image';

import Button from '@components/form/Button';

export default function Home() {
  // const searchParams = useSearchParams();

  return (
    <div className="w-screen flex flex-col items-center pt-[5vh] sm:pt-[15vh] text-center px-4">
      <Image
        src="/logo-long.png"
        height={70}
        width={210}
        alt="logo"
        className="mb-12"
      />

      <div className="flex flex-col md:flex-row divide-x-0 md:divide-x divide-y md:divide-y-0">
        <div className="md:max-w-[40vw] flex flex-col items-center text-center shrink-0 px-12">
          <div className="my-8 text-xl text-gray-700">
            To configure an existing installation, add the integration again:
          </div>
          <Button
            primary
            href="https://vercel.com/integrations/gcp/new"
            className="text-xl font-medium"
          >
            Configure Integration
          </Button>
          <div className="my-8 max-w-[600px] text-gray-600">
            Don&apos;t worry, adding the integration again won&apos;t affect
            your existing deployments and it won&apos;t create duplicates.
          </div>
        </div>
        {/* <div className="md:max-w-[40vw] flex flex-col items-center text-center shrink-0 px-12">
          <div className="my-8 text-xl text-gray-700">
            To add GCP a new Vercel project,
            {searchParams.get('configurationId')
              ? ' go to'
              : ' select the integration in Vercel, and then click '}{' '}
            &quot;Manage Access&quot;:
          </div>
          <Button
            secondary
            href={`https://vercel.com/dashboard/integrations/${
              searchParams.get('configurationId') || ''
            }`}
            className="text-xl font-medium"
          >
            Manage Integration
          </Button>
          <div className="my-8 max-w-[600px] text-gray-600">
            Choose this option if you&apos;ve already added the integration to
            your account and want to add it to a new project.
          </div>
        </div> */}
      </div>
    </div>
  );
}
