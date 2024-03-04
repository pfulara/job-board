export default function DownloadIcon({
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
        d='M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z'
      ></path>
    </svg>
  );
}
