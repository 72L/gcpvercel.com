import Image from 'next/image';
import Link from 'next/link';

export const Sponsors = () => {
  return (
    <div className="text-left flex flex-col gap-8 border-y p-8 w-full items-center">
      <div className="text-xs font-medium text-gray-500 uppercase">
        Top tools from our Vercel community
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8">
        {[
          {
            logo: 'logalert.png',
            name: 'Logalert',
            url: 'https://logalert.app',
            tagline: 'Monitor Vercel logs',
            description:
              'Catch bugs early and deploy fixes proactively with real-time Vercel log alerts. Get started today with our easy no-code installation.',
          },
          {
            logo: 'sendwith.png',
            name: 'Sendwith',
            url: 'https://sendwith.email',
            tagline: 'Email users, not spam folders',
            description:
              'Use the Gmail API in minutes. Email users from your Google Workspace account for best in class deliverability.',
          },
        ].map((sponsor, index) => (
          <Link
            className="flex flex-row items-start gap-4 flex-1 w-full sm:w-1/2 max-w-[500px] group"
            href={sponsor.url}
            key={index}
          >
            <div>
              <Image
                src={`/sponsors/${sponsor.logo}`}
                height={80}
                width={80}
                alt={sponsor.name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-lg font-bold text-gray-800 group-hover:underline underline-offset-2">
                {sponsor.name} - {sponsor.tagline}
              </div>
              <div className="text-sm text-gray-600">{sponsor.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
