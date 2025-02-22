import React, { Suspense } from 'react';
import SolutionHeader from '../Components/Solutions-Components/OldSolutionHeader';
// const BetterSolution = React.lazy(() => import('../Components/BetterSolution'));
const AutoChangeContent = React.lazy(() =>
  import('../Components/AutoChangeContent')
);
const Carousel = React.lazy(() => import('../Components/Carousel'));
const ClientReview = React.lazy(() => import('../Components/ClientReview'));
const Hero = React.lazy(() => import('../Components/Hero'));
const HowItWorks = React.lazy(() => import('../Components/HowItWorks'));
const NeedDesignerSoon = React.lazy(() =>
  import('../Components/NeedDesignerSoon')
);
const OurTools = React.lazy(() => import('../Components/OurTools'));
const OurWork = React.lazy(() => import('../Components/OurWork'));
const PowerByTechnology = React.lazy(() =>
  import('../Components/PowerByTechnology')
);

const PickPerfectPlan = React.lazy(() =>
  import('../Components/PickPerfectPlan')
);
const SolutionHomeSection = React.lazy(() =>
  import('../Components/SolutionHomeSection')
);
const SendReqSection = React.lazy(() => import('../Components/SendReqSection'));
const WallOfLove = React.lazy(() => import('../Components/WallOfLove'));
const WhatWeOffer = React.lazy(() => import('../Components/WhatWeOffer'));

const HomePage = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Suspense fallback={<p>Loading...</p>}>
        <SolutionHomeSection />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <PickPerfectPlan />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <AutoChangeContent />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <NeedDesignerSoon /> */}
        {/* <BetterSolution /> */}
        <HowItWorks />
        <AutoChangeContent changeAlignment="flex md:flex-row-reverse md:gap-10" />
        {/* <PowerByTechnology /> */}
        {/* <WhatWeOffer /> */}
        {/* <OurWork /> */}
        <OurTools />
        <WallOfLove />
        <ClientReview />
        <SendReqSection />
      </Suspense>
    </>
  );
};

export default HomePage;
