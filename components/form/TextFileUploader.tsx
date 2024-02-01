'use client';

import { useRef, useState } from 'react';

import { FileJson2 } from 'lucide-react';
import { toast } from 'sonner';

import { classes } from '@/lib/classes';

export default function TextFileUploader({
  name,
  allowedTypes,
  sizeLimitMB = 15,
  acceptMimeType,
}: {
  name: string;
  allowedTypes: string[];
  sizeLimitMB?: number;
  acceptMimeType: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileText, setFileText] = useState('');

  const handleUpload = (file: File | null) => {
    if (file) {
      if (file.size / 1024 / 1024 > sizeLimitMB) {
        toast.error(`File size too big (max ${sizeLimitMB}MB)`);
      } else if (!allowedTypes.some((type) => file.type.endsWith(type))) {
        toast.error(
          `Invalid file type ${file.type} (must be one of ${allowedTypes
            .map((type) => `.${type}`)
            .join(', ')})`,
        );
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedFile(file);
          setFileText(e.target?.result as string);
        };
        reader.readAsText(file);
      }
    }
  };

  return (
    <div>
      <label
        htmlFor={`${name}-upload`}
        className={classes(
          'group relative mt-2 flex cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50',
          'max-w-screen-md',
          'max-h-[150px] aspect-[400/150]',
        )}
      >
        <div
          className="absolute z-[5] h-full w-full rounded-md"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);

            const file = e.dataTransfer.files && e.dataTransfer.files[0];
            inputRef.current!.files = e.dataTransfer.files; // set input file to dropped file
            handleUpload(file!);
          }}
        />
        <div
          className={`${
            dragActive ? 'border-2 border-black' : ''
          } absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all ${
            uploadedFile
              ? 'bg-white/80 opacity-0 hover:opacity-100 hover:backdrop-blur-md'
              : 'bg-white opacity-100 hover:bg-gray-50'
          }`}
        >
          <svg
            className={`${
              dragActive ? 'scale-110' : 'scale-100'
            } h-7 w-7 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M12 12v9"></path>
            <path d="m16 16-4-4-4 4"></path>
          </svg>
          <p className="mt-2 text-center text-sm text-gray-500">
            Drag and drop or click to upload.
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            Max file size: {sizeLimitMB}MB
          </p>
          <span className="sr-only">File upload</span>
        </div>
        {uploadedFile && (
          <div className="flex flex-col items-center gap-4 text-sm text-gray-500">
            <FileJson2 />
            {uploadedFile.name}
          </div>
        )}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          id={`${name}-upload`}
          ref={inputRef}
          name={`${name}-upload`}
          type="file"
          accept={acceptMimeType}
          className="sr-only"
          onChange={(e) => {
            const file = e.currentTarget.files && e.currentTarget.files[0];
            handleUpload(file!);
          }}
        />
        <input
          id={`${name}-text`}
          name={name}
          type="text"
          className="sr-only"
          value={fileText}
          required
          readOnly
        />
      </div>
    </div>
  );
}
