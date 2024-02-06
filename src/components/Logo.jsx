export default function Logo({ color = 'primary' }) {
  return (
    <h1
      className={`font-bold size-4 text-center w-16 h-16 flex items-center text-${color}`}
    >
      Job Board!
    </h1>
  );
}
