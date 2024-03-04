import React from 'react';

export default function CheckIcon({
  color = 'text',
  width = '24px',
  height = '24px',
}) {
  return (
    <svg
      width={width}
      height={height}
      className={`text-${color}`}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
      ></path>
    </svg>
  );
}
