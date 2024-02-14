import Logo from '@/components/Logo';
import Link from 'next/link';
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-light border-2 border-primary text-primary-dark rounded-xl p-8 min-w-full md:min-w-96 min-h-full md:min-h-96 flex flex-col items-center'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='mt-2 w-full md:w-72'>
          {children}
        </div>
      </div>
    </div>
  );
}
