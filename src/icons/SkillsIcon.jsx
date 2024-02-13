import React from 'react';

export default function SkillsIcon({
  color = 'text',
  width = '24px',
  height = '24px',
}) {
  return (
    <svg
      width={width}
      height={height}
      className={`text-${color}`}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z'
      ></path>
    </svg>
  );
}
