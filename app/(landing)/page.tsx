import Image from 'next/image';

import Button from '@components/form/Button';
import { Sponsors } from '@components/sponsors/Sponsors';

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center text-center justify-start px-4 sm:pb-0 h-full overflow-y-scroll py-20">
      <Image
        src="/logo-long.png"
        height={100}
        width={250}
        alt="logo"
        className="mb-12"
      />
      <div className="text-4xl sm:text-8xl font-black">Use GCP on Vercel</div>
      <div className="my-6 sm:my-12 text-xl sm:text-2xl text-gray-700">
        The easiest way to use Google Cloud Platform with your Vercel project.
      </div>
      <div className="flex flex-col sm:flex-row gap-x-2 gap-y-4">
        <Button
          primary
          href="https://vercel.com/integrations/gcp/new"
          className="text-xl font-medium"
        >
          Add Vercel Integration
        </Button>
        <Button secondary className="text-xl font-medium" href="/docs">
          Read the docs
        </Button>
      </div>
      <div className="border-x sm:mx-12 mt-12 sm:mt-20">
        <Sponsors />
      </div>
    </div>
  );
}
