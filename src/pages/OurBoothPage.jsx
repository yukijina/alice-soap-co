import boothImage from '../assets/booth.png';

function OurBoothPage() {
  return (
    <section className='section-px my-20 lg:h-[80vh]'>
      <h2>Come Find Us at the Ferry Building Farmers Market</h2>
      <div className='flex gap-5 flex-col lg:flex-row'>
        <div className='lg:w-1/2'>
          <h4>We’d love to see you at there!</h4>
          <p>
            Visit our booth at San Francisco's beloved Ferry Building Farmers
            Market and discover our handcrafted luxury soaps in person. Take a
            moment to explore our collection, experience the natural scents and
            textures, and meet the makers behind each small-batch bar.
          </p>
          <p className='mt-3'>
            We're proud to be part of the vibrant community at the Ferry
            Building Farmers Market. Stop by our booth to browse our handcrafted
            soaps, discover your favorite scent, and say hello. We love meeting
            our customers and sharing the story behind every bar we make.
          </p>
        </div>

        <div className='lg:w-1/2'>
          <img
            className='rounded-4xl'
            src={boothImage}
            alt="Our Booth in the Farmer's market"
          />
        </div>
      </div>
    </section>
  );
}

export default OurBoothPage;
