import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { currentYear } from '../utils/helpers';

function Footer() {
  return (
    <footer className='section-px py-20 bg-orange-100 '>
      <div className='flex justify-between flex-col gap-6 lg:flex-row lg:gap-15'>
        <section className='grow'>
          <img src='/logo.svg' alt='Alice Soap Co. logo' className='w-23' />
          <p className='text-lime-800 text-sm'>San Francisco</p>
          <p className='pt-5 text-sm tracking-wider'>
            This website is a fictional portfolio project created for
            demonstration purposes only. <br />
            It is not a real store and is not affiliated with any real company,
            person, brand, or product. <br />
            No products or services are available for purchase. <br />
            Thank you for visiting and exploring my work
            <CiHeart className='inline text-red-600' />
          </p>
        </section>

        <section className=' flex flex-col justify-end'>
          <h5>Discover More</h5>
          <Link
            to='/our-story'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Alice's story
          </Link>
          <a
            href='#'
            target='_blank'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Ingredients index
          </a>
          <a
            href='https://www.ferrybuildingmarketplace.com/farmers-market/'
            target='_blank'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Farmer's Market
          </a>
        </section>

        <section className=' flex flex-col justify-end'>
          <h5>Connect</h5>
          <a
            href='https://www.instagram.com'
            target='_blank'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Instagram
          </a>
          <a
            href='https://www.pinterest.com'
            target='_blank'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Pintarest
          </a>
          <a
            href='#'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Write to Alice
          </a>
        </section>
      </div>

      <hr className='mt-30 mb-5 text-lime-800 opacity-10' />
      <div className='flex justify-between text-stone-500 text-xs flex-col gap-1 md:flex-row'>
        <p>
          &copy; {currentYear} Hand-poured with love in San Francisco. All
          rights reserved.
        </p>

        <ul className='flex gap-3 tracking-wider'>
          <li>Privary Policy</li>
          <li>Terms of Ritual</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
