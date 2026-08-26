import Favorite from './sections/Favorite';
import Hero from './sections/Hero';
import MarketGossip from './sections/MarketGossip';
import OurRoot from './sections/OurRoot';
import Philosophy from './sections/Philosophy';
import Spotlight from './sections/Spotlight';
import Stories from './sections/Stories';

function Home() {
  return (
    <>
      <Hero />
      <OurRoot />
      <Favorite />
      <Philosophy />
      <Spotlight />
      <MarketGossip />
      <Stories />
    </>
  );
}

export default Home;
