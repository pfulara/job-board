'use client';
export default function Notification({
  status = 'error',
  message,
}) {
  return (
    <div
      className={`fixed right-4 bottom-4 border border-${status} py-2 px-8 bg-${status}-light text-${status}-dark rounded-xl`}
    >
      {message}
    </div>
  );
}
