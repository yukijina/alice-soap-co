import Favorite from '../components/Favorite';
import Hero from '../components/Hero';
import MarketGossip from '../components/MarketGossip';
import OurRoot from '../components/OurRoot';
import Philosophy from '../components/Philosophy';
import Spotlight from '../components/Spotlight';
import Stories from '../components/Stories';

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
