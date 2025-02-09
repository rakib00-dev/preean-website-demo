import BetterSolution from '../Components/BetterSolution';
import Carousel from '../Components/Carousel';
import ClientReview from '../Components/ClientReview';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks';
import NeedDesignerSoon from '../Components/NeedDesignerSoon';
import OurTools from '../Components/OurTools';
import OurWork from '../Components/OurWork';
import PowerByTechnology from '../Components/PowerByTechnology';
import SendReqSection from '../Components/SendReqSection';
import WallOfLove from '../Components/WallOfLove';
import WhatWeOffer from '../Components/WhatWeOffer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <NeedDesignerSoon />
      <BetterSolution />
      <HowItWorks />
      <PowerByTechnology />
      <WhatWeOffer />
      <OurWork />
      <OurTools />
      <WallOfLove />
      <ClientReview />
      <SendReqSection />
    </>
  );
};

export default HomePage;
