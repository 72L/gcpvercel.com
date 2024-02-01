import { ReactNode } from 'react';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { slugify } from '@/lib/slugify';

export const markdownComponents = {
  code: (({
    children,
    inline,
    className,
  }: {
    children: ReactNode;
    inline?: boolean;
    className?: any;
  }) => {
    if (inline) {
      return (
        <code className="mx-[1px] rounded-[4px] border bg-gray-50 px-[3px] text-[0.9em] text-gray-800">
          {children}
        </code>
      );
    }

    const language = className!.replace(/language-/, '');
    return (
      <pre className="my-6 p-4 bg-gray-50 border text-gray-800 rounded-none">
        <SyntaxHighlighter
          language={language}
          style={stackoverflowLight}
          customStyle={{ background: 'transparent' }}
        >
          {`${children}`}
        </SyntaxHighlighter>
      </pre>
    );
  }) as CodeComponent,
  h1: ({ children }: { children: ReactNode }) => (
    <h1
      className="mb-4 mt-0 sm:mt-16 text-3xl font-bold text-custom-gray-800"
      id={slugify(children)}
    >
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2
      className="mb-4 mt-8 text-2xl font-medium text-custom-gray-800"
      id={slugify(children)}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3
      className="mb-4 mt-10 text-xl font-medium text-custom-gray-800"
      id={slugify(children)}
    >
      {children}
    </h3>
  ),
  hr: () => <hr className="my-8 border-custom-gray-100" />,
  p: ({ children }: { children: ReactNode }) => (
    <p className="mb-4 text-custom-gray-600">{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="mb-4 list-outside list-disc pl-4">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="mb-4 ml-6 list-outside list-decimal space-y-1">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="mb-1 text-custom-gray-600">{children}</li>
  ),
  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <Link
      className="text-blue-600 hover:underline"
      href={href || '#'}
      target={href && href.startsWith('http') ? '_blank' : undefined}
    >
      {children}
      {href && href.startsWith('http') && (
        <ExternalLink size={18} className="inline pl-1" />
      )}
    </Link>
  ),
};
