export default function Logo({
  color = 'primary',
  size = 'text-md',
}) {
  return (
    <span
      className={`font-bold ${size} text-center w-12 h-12 flex items-center text-${color}`}
    >
      Job Board!
    </span>
  );
}
