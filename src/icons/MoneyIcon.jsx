export default function MoneyIcon({
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
        d='M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m13-6v11c0 1.1-.9 2-2 2H4v-2h17V7z'
      ></path>
    </svg>
  );
}
