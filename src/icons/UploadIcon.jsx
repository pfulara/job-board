export default function UploadIcon({
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
        d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z'
      ></path>
    </svg>
  );
}
