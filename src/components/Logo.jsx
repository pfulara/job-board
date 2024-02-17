export default function Logo({
  color = 'primary',
  size = 'text-md',
}) {
  return (
    <span
      className={`font-bold ${size} text-center w-16 h-16 flex items-center text-${color}`}
    >
      Job Board!
    </span>
  );
}
