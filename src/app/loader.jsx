'use server';

export default async function Loader() {
  return (
    <div className='flex h-full w0-full items-center justify-center mt-24'>
      <div className='loader' />
      <div
        className='loader'
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className='loader'
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
}
