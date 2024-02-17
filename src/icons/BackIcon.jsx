export default function BackIcon({
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
        d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z'
      ></path>
    </svg>
  );
}
