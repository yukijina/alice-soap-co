function Footer() {
  return (
    <footer className='section-px py-20 bg-orange-100 '>
      <div className='flex justify-between gap-15'>
        <section className='grow'>
          <img src='/logo.svg' alt='Alice Soap Co. logo' className='w-23' />
          <p className='text-lime-800 text-sm'>San Francisco</p>
          <p className='pt-5 text-sm tracking-wider'>
            Sustainably formulating plant-based skincare and premium
            <br />
            cold-pressed soap bars in San Francisco since 2022. <br />
            Dedicated to gentle rituals and clean coastal health.
          </p>
        </section>

        <section className=' flex flex-col justify-end'>
          <h5>Discover More</h5>
          <a
            href='#'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Alice's story
          </a>
          <a
            href='#'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Ingredients index
          </a>
          <a
            href='#'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Farmer's Market
          </a>
        </section>

        <section className=' flex flex-col justify-end'>
          <h5>Connect</h5>
          <a
            href='#'
            className='text-stone-500 text-sm block tracking-wider leading-relaxed'
          >
            Instagram
          </a>
          <a
            href='#'
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
      <div className='flex justify-between text-stone-500 text-xs'>
        <p>
          &copy; 2026 Alice Soap Co. Hand-poured with love in San Francisco. All
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
