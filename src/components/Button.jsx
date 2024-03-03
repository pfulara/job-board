'use client';

export default function Button({
  color = 'primary',
  label,
  fullWidth = false,
  type = undefined,
  onClick = () => null,
}) {
  return (
    <button
      type={type}
      className={`py-2 px-4 border-2 rounded-3xl min-w-20 min-h-12 flex justify-center items-center ${
        color === 'primary'
          ? `border-primary text-primary-dark bg-secondary hover:bg-primary-dark hover:text-secondary hover:border-secondary`
          : `border-secondary text-secondary bg-primary-dark hover:bg-secondary hover:text-primary-dark hover:border-primary`
      }
      ${fullWidth ? 'w-full' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
