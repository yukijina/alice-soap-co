// place holder image
import favorite1 from '../../../assets/favorite-1.png';
import favorite2 from '../../../assets/favorite-2.png';
import favorite3 from '../../../assets/favorite-3.png';
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
      <div className='flex justfiy-center gap-10'>
        <section className='flex-1'>
          <img
            src={favorite1}
            alt='soap name'
            className='rounded-4xl object-cover w-full h-70'
          />

          <div className=' mt-5 mb-2'>
            <h3>Chamomile Dream</h3>
            <p>
              A delicate floral bar with a soothing herbal character crafted for
              a peaceful evening bathing ritual.
            </p>
          </div>
        </section>

        {/* #2 soap */}
        <section className='flex-1'>
          <img
            src={favorite2}
            alt='soap name'
            className='rounded-4xl object-cover w-full h-70'
          />
          <div className='mt-5 mb-2'>
            <h3>Sandalwood Fig</h3>
            <p>
              A refined earthy luxury bar combining creamy fig with warm
              sandalwood for a sophisticated bathing experience.
            </p>
          </div>
        </section>

        {/* #3 soap */}
        <section className='flex-1'>
          <img
            src={favorite3}
            alt='soap name'
            className='rounded-4xl object-cover w-full h-70'
          />
          <div className='mt-5 mb-2'>
            <h3>Cedar Sage</h3>
            <p>
              A sophisticated botanical bar inspired by the earthy landscapes of
              Northern California with a clean and grounding character.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Favorite;
