function Loader() {
  console.log('loading in Loader now');
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center bg-amber-50'>
      <span className='loader'></span>
    </div>
  );
}

export default Loader;
