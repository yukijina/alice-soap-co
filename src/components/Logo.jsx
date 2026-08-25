import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/'>
      <img src='/logo.svg' alt='Alico Soap Co. logo' className='w-28' />
    </Link>
  );
}

export default Logo;
