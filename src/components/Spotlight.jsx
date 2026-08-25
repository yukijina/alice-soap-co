import heroImg from '../assets/hero.jpeg';
import Button from './Button';

function Spotlight() {
  return (
    <main className='my-20 flex items-center gap-20 section-px'>
      <div>
        <img
          src={heroImg}
          alt='soap'
          className='w-164 [clip-path:inset(0%_round_60px_60px_60px_60px)]'
        />
      </div>
      <div>
        <h4>&#9679; Spotlight Release</h4>
        <h2>The Sutro Signature: Mission Apricot & Clay</h2>
        <p>
          Formulated to emulate the golden hour warmth of San Francisco's
          Mission District. We steep natural apricot kernels in cold-pressed
          Mediterranean olive oil for three weeks before blending with organic
          French pink clay and a restorative cocktail of neroli and sweet orange
          essential oils.
        </p>
        <div className='flex gap-10 mt-12'>
          <div>
            <p className='text-lime-800 text-4xl font-medium font-cormorant'>
              100%
            </p>
            <p>Essential Oil Scent</p>
          </div>
          <div>
            <p className='text-lime-800 text-4xl font-medium font-cormorant'>
              Zero
            </p>
            <p>Synthetic Sulfates</p>
          </div>
          <div>
            <p className='text-lime-800 text-4xl font-medium font-cormorant'>
              6 Weeks
            </p>
            <p>Fog Cured</p>
          </div>
        </div>
        <div className='my-10'>
          <Button to='/product' type='dark'>
            Shop the Collection
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Spotlight;
