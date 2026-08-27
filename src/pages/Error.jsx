import { useRouteError } from 'react-router-dom';
import errorImg from '../assets/error.png';
import Button from '../components/Button';

function Error() {
  const error = useRouteError();
  // console.log(error.message);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div>
        <img src={errorImg} alt='404 error' className='w-200' />
      </div>
      <h2>Opps! This page seems to have washed away.</h2>
      <p>{error.data || error.message}</p>
      <h4>Let's get you back on track!</h4>
      <Button to='-1' type='light'>
        &larr; Go Back
      </Button>
    </div>
  );
}

export default Error;
