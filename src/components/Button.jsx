'use client';
import LoadingIcon from '@/icons/LoadingIcon';

export default function Button({
  color = 'primary',
  label,
  onClick = () => null,
  loading = false,
}) {
  return (
    <button
      disabled={loading}
      className={`py-2 px-4 border-2 rounded-3xl min-w-20 min-h-12 flex justify-center items-center ${
        color === 'primary'
          ? `border-primary text-primary bg-secondary ${!loading && 'hover:bg-primary-dark hover:text-secondary hover:border-secondary'}`
          : `border-secondary text-secondary bg-primary-dark ${!loading && 'hover:bg-secondary hover:text-primary-dark hover:border-primary-dark'}`
      }`}
      onClick={onClick}
    >
      {loading ? <LoadingIcon color={color} /> : label}
    </button>
  );
}
