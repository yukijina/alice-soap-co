import { CiInstagram } from 'react-icons/ci';
import story1 from '../../../assets/story-1.jpeg';
import story2 from '../../../assets/story-2.jpeg';
import story3 from '../../../assets/story-3.jpeg';
import story4 from '../../../assets/story-4.jpeg';

function Stories() {
  return (
    <section className='section-px py-20'>
      <h4>&#9679; Alice's Communal</h4>
      <div className='flex justify-between items-center flex-col md:flex-row'>
        <h2>Alice's Soap stories on Instagram</h2>
        <a
          href='https://www.instagram.com'
          target='_blank'
          className='text-lime-800 mb-6'
        >
          <CiInstagram className='inline-block' />
          <span className='text-sm pl-1'>Alice's Soap Store Co.</span>
        </a>
      </div>

      <div className='flex gap-10'>
        <div className='flex-1'>
          <img src={story1} alt='soap name' className='rounded-4xl w-full' />
        </div>

        <div className='flex-1'>
          <img src={story2} alt='soap name' className='rounded-4xl w-full' />
        </div>
        <div className='flex-1'>
          <img src={story3} alt='soap name' className='rounded-4xl w-full' />
        </div>
        <div className='flex-1'>
          <img src={story4} alt='soap name' className='rounded-4xl w-full' />
        </div>
      </div>
    </section>
  );
}

export default Stories;
