import PricingFaq from '../Components/PricingPage/PricingFaq';
import SendReqSection from '../Components/SendReqSection';
// import SolutionHeader from '../Components/Solutions-Components/OldSolutionHeader';
import React, { Suspense } from 'react';
import TargetAudience from '../Components/Solutions-Components/TargetAudience';
import AgenciesWordwide from '../Components/Solutions-Components/AgenciesWordwide';
import WhyChoose from '../Components/Solutions-Components/WhyChoose';
import SocialMediaWallOfLove from '../Components/Solutions-Components/SocialMediaWallOfLove';

import SolutionHeader from '../Components/Solutions-Components/SolutionHeader';
const AnimatedPost = React.lazy(() =>
  import('../Components/Solutions-Components/AnimatedPost')
);
const PostOnSocialMedia = React.lazy(() =>
  import('../Components/Solutions-Components/PostOnSocialMedia')
);
const OurSoluWork = React.lazy(() =>
  import('../Components/Solutions-Components/OurSoluWork')
);

const GraphicDesign = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SolutionHeader largeScreenImg="md:w-1/2"></SolutionHeader>
      {/* our work */}
      <Suspense fallback={<p>Loading...</p>}>
        <OurSoluWork />
      </Suspense>
      <TargetAudience />
      <AgenciesWordwide />
      <WhyChoose />
      <Suspense fallback={<p>Loading...</p>}>
        <PostOnSocialMedia />
      </Suspense>
      <SocialMediaWallOfLove />
    </section>
  );
};

export default GraphicDesign;
