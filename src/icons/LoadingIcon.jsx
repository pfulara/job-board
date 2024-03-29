export default function LoadingIcon() {
  return (
    <>
      <div className='loader' />
      <div
        className='loader'
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className='loader'
        style={{ animationDelay: '1s' }}
      />
    </>
  );
}
