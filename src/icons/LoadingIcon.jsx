export default function LoadingIcon() {
  return (
    <>
      <div className='absolute rounded-xl border-primary loader'></div>
      <div
        className='absolute rounded-lg border-primary loader'
        style={{
          animationDelay: '0.75s',
          height: '1.5rem',
          width: '1.5rem',
        }}
      ></div>
    </>
  );
}
