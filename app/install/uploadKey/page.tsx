'use client';

import { useContext, useEffect, useState } from 'react';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { addServiceAccountToProject } from '@/lib/actions/addServiceAccountToProject';
import { getTeamProjects } from '@/lib/actions/getTeamProjects';
import { classes } from '@/lib/classes';
import Button from '@components/form/Button';
import TextFileUploader from '@components/form/TextFileUploader';

import { InstallationContext } from '../layout';

export default function Page() {
  const router = useRouter();
  const { vercelCredentials } = useContext(InstallationContext);
  const [projects, setProjects] = useState<{ id: string; name: string }[]>([]);

  // get vercel projects
  useEffect(() => {
    if (!vercelCredentials) return;
    getTeamProjects(vercelCredentials).then((res) => {
      setProjects(res);
    });
  }, [vercelCredentials]);

  return (
    <div>
      <form
        action={async (data: FormData) => {
          const serviceAccountKey = data.get('serviceAccountKey') as string;
          const projectId = data.get('projectId') as string;

          if (!serviceAccountKey || !projectId) {
            toast.error('Please fill out all fields');
            return;
          }

          if (!vercelCredentials) {
            toast.error('Something went wrong: Missing Vercel credentials.');
            return;
          }

          addServiceAccountToProject({
            vercelCredentials,
            serviceAccountKey,
            projectId,
          }).then(async (res: any) => {
            if (res.error) {
              toast.error(res.error);
            } else {
              // get project name
              const project = projects.find((p) => p.id === projectId);
              toast.success(
                `Successfully added GCP to ${project?.name || 'project'}`,
              );
              router.push('/install/codeSamples');
            }
          });
        }}
      >
        <Link
          href="/install/serviceAccount"
          className="flex flex-row items-center text-gray-500 text-sm"
        >
          <ArrowLeft size={14} />
          Go back
        </Link>
        <div className="text-3xl font-bold mt-4">
          Upload service account credentials
        </div>
        <div className="text-gray-600 my-4">
          Upload your service account credentials JSON file here.
        </div>
        <TextFileUploader
          name="serviceAccountKey"
          allowedTypes={['json']}
          acceptMimeType="application/json"
        />
        <div className="text-gray-600 my-4">
          Choose which project on Vercel to apply these GCP credentials
        </div>
        <select
          name="projectId"
          className={classes(
            'transition-all ease-in-out duration-500',
            'overflow-hidden truncate text-ellipsis whitespace-nowrap',
            // 1px from border
            'py-3 px-6',
            'w-full sm:w-fit h-fit',
            'flex flex-row items-center',
            'border',
            'text-[16px] leading-[24px]',
            'rounded',
            'mb-8 mt-4',
          )}
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <Button type="submit" primary>
          Add Credentials
        </Button>
      </form>
    </div>
  );
}
