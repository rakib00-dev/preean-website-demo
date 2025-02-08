import BetterSolution from '../Components/BetterSolution';
import Carousel from '../Components/Carousel';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks';
import NeedDesignerSoon from '../Components/NeedDesignerSoon';
import PowerByTechnology from '../Components/PowerByTechnology';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <NeedDesignerSoon />
      <BetterSolution />
      <HowItWorks />
      <PowerByTechnology />
    </>
  );
};

export default HomePage;
