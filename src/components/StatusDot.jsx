import React from 'react';

export default function StatusDot({ status }) {
  let color = 'bg-text';
  switch (status) {
    case 'Active':
      color = 'bg-success';
      break;
    case 'Cancelled':
      color = 'bg-error';
      break;
    default:
      color = 'bg-text';
  }
  return (
    <div className={`w-4 h-4 mr-2 rounded-full ${color}`} />
  );
}
