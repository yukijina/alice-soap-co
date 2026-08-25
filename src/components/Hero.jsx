import { CiHeart } from 'react-icons/ci';
import heroImg from '../assets/hero.jpeg';
import Button from './Button';

function Hero() {
  return (
    <main className='my-20 flex items-center gap-20 section-px'>
      <div>
        <h4>&#9679; Alice Cold-Pressed Soap</h4>
        <h1>Handcrafted luxury, cured in the San Francisco fog</h1>
        <p>
          We small-batch brew natural, plant-powered soap bars using organic
          botanicals, mineral-rich clays, and local olive oil. Hand-poured,
          hand-cut, and slow-cured right here in San Francisco.
        </p>
        <div className='my-10'>
          <Button to='/product' type='dark'>
            Shop the Collection
          </Button>
          <Button to='#' type='light'>
            Find our Market Booth
          </Button>
        </div>

        <div className='flex items-center text-sm gap-x-2'>
          <CiHeart className='text-lime-800 text-lg' />
          <p>Sustainably handmade in SF • Always 100% biodegradable</p>
        </div>
      </div>

      <div>
        <img
          src={heroImg}
          alt='soap'
          className='w-164 [clip-path:inset(0%_round_60px_60px_60px_60px)]'
        />
      </div>
    </main>
  );
}

export default Hero;
