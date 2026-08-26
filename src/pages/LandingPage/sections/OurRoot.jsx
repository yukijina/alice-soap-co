import workImg from '../../../assets/work-1.jpeg';
import avatarImg from '../../../assets/avatar.png';

function OurRoot() {
  return (
    <section className='section-px bg-orange-100 flex py-20 gap-20'>
      <div>
        <img
          src={workImg}
          alt='Handcrafted soap making'
          className='rounded object-cover'
        />
      </div>

      <div>
        <h4>&#9679; Our Roots</h4>
        <h2>Handcrafted in SF, loved at the local markets</h2>
        <p>
          Sutro Atelier was born out of a desire for a clean, ritualistic daily
          cleanse that honors our coastal landscape. What started as a small
          kitchen experiment in our Sunset district apartment has flourished
          into a family-run passion.
        </p>
        <p>
          Sutro Atelier was born out of a desire for a clean, ritualistic daily
          cleanse that honors our coastal landscape. What started as a small
          kitchen experiment in our Sunset district apartment has flourished
          into a family-run passion.
        </p>

        <div className='flex gap-3 items-center mt-10'>
          <img
            src={avatarImg}
            alt='Founder of Alice Soap Co.'
            className='w-12 h-12 rounded-4xl'
          />
          <div>
            <p>Alice</p>
            <p className='text-lime-800 text-xs'>Founder & Master Soapmaker</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurRoot;
