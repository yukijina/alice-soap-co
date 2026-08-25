import { CiDroplet } from 'react-icons/ci';
import { CiBrightnessDown } from 'react-icons/ci';
import { CiPillsBottle1 } from 'react-icons/ci';
import { CiWheat } from 'react-icons/ci';

function Philosophy() {
  return (
    <section className='section-px py-20 bg-orange-100'>
      <h4>&#9679; Our Philosophy</h4>

      <h2 className='text-center mb-20'>
        Formulated with strict purity, designed for luxurious bathing rituals
      </h2>

      <div className='flex gap-10'>
        <section className='bg-amber-50 rounded-2xl px-5 py-5'>
          <div className='py-2 w-10 mb-5 bg-orange-200 rounded-3xl'>
            <CiDroplet className='color-lime-800 text-2xl m-auto' />
          </div>

          <h3>Cold-Pressed Method</h3>
          <p>
            Our soaps cure for 6 weeks, retaining natural plant glycerin to keep
            your skin plump and deeply hydrated.
          </p>
        </section>

        <section className='bg-amber-50 rounded-2xl px-5 py-5'>
          <div className='py-2 w-10 mb-5 bg-orange-200 rounded-3xl'>
            <CiBrightnessDown className='color-lime-800 text-2xl m-auto' />
          </div>
          <h3>Bay Area Sourcing</h3>
          <p>
            We prioritize ingredients from local organic family farms—from Raw
            SF Honey to organic cold-pressed botanicals.
          </p>
        </section>

        <section className='bg-amber-50 rounded-2xl px-5 py-5'>
          <div className='py-2 w-10 mb-5 bg-orange-200 rounded-3xl'>
            <CiPillsBottle1 className='color-lime-800 text-2xl m-auto' />
          </div>
          <h3>Pure Essential Oils</h3>
          <p>
            Absolutely no synthetic fragrances. Scented only with
            therapeutic-grade, steam-distilled essential oils.
          </p>
        </section>

        <section className='bg-amber-50 rounded-2xl px-5 py-5'>
          <div className='py-2 w-10 mb-5 bg-orange-200 rounded-3xl'>
            <CiWheat className='color-lime-800 text-2xl m-auto' />
          </div>
          <h3>Water-Free Curing</h3>
          <p>
            Using minimal, zero-plastic parchment packaging, our bars are cured
            fully under cool coastal ocean winds.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Philosophy;
