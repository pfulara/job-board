import React from 'react';

export default function OfficeIcon({
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
        d='M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z'
      ></path>
    </svg>
  );
}
