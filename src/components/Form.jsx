import LoadingIcon from '@/icons/LoadingIcon';
import React from 'react';

export default function Form({
  children,
  onSubmit,
  isSubmitting,
}) {
  return (
    <div className='relative'>
      <form onSubmit={onSubmit}>{children}</form>
      {isSubmitting && (
        <div className='absolute h-full w-full flex items-center justify-center top-0 left-0 bg-secondary-dark z-10 opacity-85'>
          <LoadingIcon />
        </div>
      )}
    </div>
  );
}
