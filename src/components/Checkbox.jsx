import CheckIcon from '@/icons/CheckIcon';
import React from 'react';

export default function Checkbox({
  label,
  onChange = () => null,
  value = false,
}) {
  return (
    <label>
      <input
        type='checkbox'
        checked={Boolean(value)}
        onChange={onChange}
        className='hidden'
      />
      <div className='flex gap-2 cursor-pointer'>
        <div
          className={`border-2 border-primary w-4 h-4 ${value ? 'bg-primary' : 'white'}`}
        >
          {value && (
            <CheckIcon
              width='12px'
              height='12px'
              color='secondary-light'
            />
          )}
        </div>
        <span className='font-bold text-sm text-text-dark'>
          {label}
        </span>
      </div>
    </label>
  );
}
