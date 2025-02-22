import React, { Suspense } from 'react';
// import TargetAudience from '../Components/Solutions-Components/TargetAudience';
import AgenciesWordwide from '../Components/Solutions-Components/AgenciesWordwide';
import WhyChoose from '../Components/Solutions-Components/WhyChoose';
import SocialMediaWallOfLove from '../Components/Solutions-Components/SocialMediaWallOfLove';

import SolutionHeader from '../Components/Solutions-Components/SolutionHeader';
import SolutionVideo from '../Components/Solutions-Components/SolutionVideo';
import SolutionClientRequest from '../Components/Solutions-Components/SolutionClientRequest';
import SolutionCompare from '../Components/Solutions-Components/SolutionCompare';
import SolutionReady from '../Components/SolutionReady';
import SolutionPricingPlan from '../Components/Solutions-Components/SolutionPricingPlan';
import SolutionExploreMore from '../Components/Solutions-Components/SolutionExploreMore';
import SolutonAhead from '../Components/Solutions-Components/SolutonAhead';
import SolutionFilter from '../Components/Solutions-Components/SolutionFilter';

const SolutionHomeSection = React.lazy(() =>
  import('../Components/SolutionHomeSection')
);
const SolutionWhyChoose = React.lazy(() =>
  import('../Components/Solutions-Components/SolutionWhyChoose')
);
const SolutionCards = React.lazy(() =>
  import('../Components/Solutions-Components/SolutionCards')
);
const PostOnSocialMedia = React.lazy(() =>
  import('../Components/Solutions-Components/PostOnSocialMedia')
);
// import PricingFaq from '../Components/PricingPage/PricingFaq';
// import SendReqSection from '../Components/SendReqSection';
// import SolutionHeader from '../Components/Solutions-Components/OldSolutionHeader';
// const AnimatedPost = React.lazy(() =>
//   import('../Components/Solutions-Components/AnimatedPost')
// );
// const OurSoluWork = React.lazy(() =>
//   import('../Components/Solutions-Components/OurSoluWork')
// );

const GraphicDesign = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SolutionHeader largeScreenImg="md:w-1/2"></SolutionHeader>
      {/* our work */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* <OurSoluWork /> */}
        <SolutionCards />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <SolutionVideo />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <SolutionWhyChoose />
      </Suspense>
      {/* filter section -><- */}
      <SolutionFilter />
      <Suspense fallback={<p>Loading...</p>}>
        <SolutionHomeSection />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <SolutionClientRequest />
      </Suspense>
      <SolutionCompare />
      <SolutionPricingPlan />
      <SolutionExploreMore />
      <SolutionReady />
      <SolutonAhead />
    </section>
  );
};

export default GraphicDesign;
