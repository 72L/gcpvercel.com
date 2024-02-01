'use client';

import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react';

import Link from 'next/link';

import { classes } from '@/lib/classes';

import { Spinner } from './Spinner';

export default function Button({
  onClick,
  className = '',
  children,
  disabled = false,
  primary,
  secondary = false,
  href,
  type = 'button',
}: {
  onClick?: () => Promise<any>;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) {
  const [loading, setLoading] = useState<boolean>();

  const onClickWrapper = () => {
    if (onClick && !loading) {
      setLoading(true);
      onClick().finally(() => {
        setLoading(false);
      });
    }
  };

  const button = (
    <button
      className={classes(
        'transition-all ease-in-out duration-500',
        'overflow-hidden truncate text-ellipsis whitespace-nowrap',
        // 1px from border
        'py-2 px-6',
        'font-bold',
        'w-full sm:w-fit h-fit',
        'text-center flex flex-row justify-center items-center',
        'border',
        'text-[16px] leading-[24px]',
        'rounded',
        primary && 'text-white bg-gray-800 border-transparent',
        primary &&
          (disabled
            ? 'opacity-20 cursor-not-allowed'
            : 'hover:bg-white hover:text-gray-800 hover:border-gray-700'),
        secondary && 'bg-white text-gray-600 border-gray-200',
        secondary &&
          (disabled
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:text-gray-700 hover:bg-gray-50 hover:border-gray-400'),

        // loading affects hover
        primary && loading && 'hover:bg-gray-700',
        secondary && loading && 'hover:bg-gray-100 hover:border-transparent',
        loading && 'cursor-wait',
        className,
      )}
      onClick={onClickWrapper}
      disabled={loading || disabled}
      type={type}
    >
      <div
        className={classes(
          // flex-col because we want the hidden children to be under
          'flex flex-col',
          'items-center justify-center h-[24px]',
        )}
        suppressHydrationWarning
      >
        {loading ? <Spinner /> : children}
        {loading && <div className="h-0 opacity-0">{children}</div>}
      </div>
    </button>
  );

  if (href)
    return (
      <Link href={href} className="contents">
        {button}
      </Link>
    );

  return button;
}
