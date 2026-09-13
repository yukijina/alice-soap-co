import { CiHeart } from 'react-icons/ci';
import ourStoryImage from '../assets/ourstory.png';

function OurStoryPage() {
  return (
    <div className='section-px my-20 h-[80vh]'>
      <h2>About this website</h2>

      <div className='flex gap-10'>
        <div className='w-1/2'>
          <h4>Disclaimer</h4>
          <p>
            This website is a design and development project created for
            portfolio and demonstration purposes only. It is a fictional
            e-commerce concept and is not an actual online store. Any company
            name, brand identity, logos, product names, descriptions, images,
            pricing, customer information, or other content shown on this
            website is used solely for illustrative purposes and does not
            represent or imply any real company, individual, product, service,
            or commercial relationship.
          </p>
          <p className='mt-3'>
            No products or services are actually available for purchase through
            this website, and any similarities to existing businesses, brands,
            people, or products are purely coincidental.
          </p>
          <p className='mt-5'>
            Thank you for visiting and taking the time to explore my project{' '}
            <CiHeart className='inline text-red-600' />
          </p>
        </div>
        <div className='w-1/2'>
          <img
            className='rounded-4xl'
            src={ourStoryImage}
            alt='Thank you for visiting our website'
          />
        </div>
      </div>
    </div>
  );
}

export default OurStoryPage;
