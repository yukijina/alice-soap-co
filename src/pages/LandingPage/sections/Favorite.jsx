// place holder image
import soapImg from '../../../assets/aux-1a.png';
import Button from '../../../components/Button';

function Favorite() {
  return (
    <section className='section-px py-20'>
      <h4>&#9679; Curated Favorites</h4>
      <div className='flex justify-between items-center'>
        <h2>Bars of pure skin nourishment</h2>
        <Button to='/product' type='light'>
          View Full Soap &rarr;
        </Button>
      </div>

      {/* #1 soap */}
      <div className='flex gap-10'>
        <section>
          <img src={soapImg} alt='soap name' className='rounded-4xl' />
          <div className='flex justify-between items-center mt-5 mb-2'>
            <h3>Mission Apricot & Clay</h3>
            <p className='font-semibold'>$16.00</p>
          </div>
          <div className='flex flex-col items-end'>
            <p>
              French pink clay and sun-ripened apricot kernel oil. Highly
              moisturizing.
            </p>
            <a href='#'>Add Cart +</a>
          </div>
        </section>

        {/* #2 soap */}
        <section>
          <img src={soapImg} alt='soap name' className='rounded-4xl' />
          <div className='flex justify-between items-center mt-5 mb-2'>
            <h3>Mission Apricot & Clay</h3>
            <p className='font-semibold'>$16.00</p>
          </div>
          <div className='flex flex-col items-end'>
            <p>
              French pink clay and sun-ripened apricot kernel oil. Highly
              moisturizing.
            </p>
            <a href='#'>Add Cart +</a>
          </div>
        </section>

        {/* #3 soap */}
        <section>
          <img src={soapImg} alt='soap name' className='rounded-4xl' />
          <div className='flex justify-between items-center mt-5 mb-2'>
            <h3>Mission Apricot & Clay</h3>
            <p className='font-semibold'>$16.00</p>
          </div>
          <div className='flex flex-col items-end'>
            <p>
              French pink clay and sun-ripened apricot kernel oil. Highly
              moisturizing.
            </p>
            <a href='#'>Add Cart +</a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Favorite;
