export default async function Loader() {
  return (
    <div className='flex h-full w-full items-center justify-center mt-16'>
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
