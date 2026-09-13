function Loader() {
  console.log('loading in Loader now');
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-amber-50'>
      <div className='loader'></div>
    </div>
  );
}

export default Loader;
