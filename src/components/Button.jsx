'use client';
export default function Button({
  label,
  onClick = () => null,
}) {
  return (
    <button
      className='py-2 px-4 border border-primary text-primary rounded-3xl hover:text-primary-light hover:border-primary-light'
      onClick={onClick}
    >
      {label}
    </button>
  );
}
