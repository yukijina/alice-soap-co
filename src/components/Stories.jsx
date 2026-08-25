import { CiInstagram } from 'react-icons/ci';
import Image1 from '../assets/soap-3.jpeg';
import Image2 from '../assets/soap-6.jpeg';
import Image3 from '../assets/soap-10.jpeg';
import Image4 from '../assets/store-1.jpeg';

function Stories() {
  return (
    <section className='section-px py-20'>
      <h4>&#9679; Alice's Communal</h4>
      <div className='flex justify-between items-center'>
        <h2>Alice's Soap stories on Instagram</h2>
        <a href='#' className='text-lime-800 flex gap-2 items-center'>
          <CiInstagram />
          <span className='text-sm '>Alice's Soap Store Co.</span>
        </a>
      </div>

      <div className='flex gap-10'>
        <div className='flex-1'>
          <img src={Image1} alt='soap name' className='rounded-4xl w-full' />
        </div>

        <div className='flex-1'>
          <img src={Image2} alt='soap name' className='rounded-4xl w-full' />
        </div>
        <div className='flex-1'>
          <img src={Image3} alt='soap name' className='rounded-4xl w-full' />
        </div>
        <div className='flex-1'>
          <img src={Image4} alt='soap name' className='rounded-4xl w-full' />
        </div>
      </div>
    </section>
  );
}

export default Stories;
