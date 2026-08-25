function MarketGossip() {
  return (
    <section className='section-px py-20 bg-orange-100'>
      <h4>&#9679; SF Market Gossip</h4>

      <h2 className='text-center mb-20'>
        Shared wisdom from our health-conscious neighbors
      </h2>

      <div className='flex gap-10'>
        <section className='bg-amber-50 rounded-2xl px-5 py-5'>
          <p className=' text-orange-300 text-5xl'>&ldquo;</p>
          <p className='italic'>
            My sensitive skin used to flare up at every liquid wash. Clara’s
            apricot clay soap transformed my daily shower into a soothing
            sanctuary. I make a special trip to Ferry Plaza just for this.
          </p>
          <div className='mt-10'>
            <p className='font-semibold'>Eleanor V.</p>
            <p className='text-lime-800 text-sm'>Ferry Plaza Regular</p>
          </div>
        </section>

        <section className='bg-amber-50 rounded-2xl px-5 py-5'>
          <p className=' text-orange-300 text-5xl'>&ldquo;</p>
          <p className='italic'>
            The Coastal Sage bar smells exactly like hiking through the Presidio
            after the morning fog clears. It cleanses beautifully without
            leaving that tight, dry residue.
          </p>
          <div className='mt-10'>
            <p className='font-semibold'>Marianne K.</p>
            <p className='text-lime-800 text-sm'>Presidio Heights Resident</p>
          </div>
        </section>

        <section className='bg-amber-50 rounded-2xl px-5 py-5'>
          <p className=' text-orange-300 text-5xl'>&ldquo;</p>
          <p className='italic'>
            Pure luxury. From the beautifully hand-stamped logo to the subtle
            botanical scent. This is the only brand I gift to friends who
            appreciate true SF artisan craft.
          </p>
          <div className='mt-10'>
            <p className='font-semibold'>Sophia L.</p>
            <p className='text-lime-800 text-sm'>Fort Mason Market Supporter</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MarketGossip;
