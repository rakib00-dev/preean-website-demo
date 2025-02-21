import PricingFaq from '../Components/PricingPage/PricingFaq';
import SendReqSection from '../Components/SendReqSection';
import SolutionHeader from '../Components/Solutions-Components/SolutionHeader';
import React, { Suspense } from 'react';
import TargetAudience from '../Components/Solutions-Components/TargetAudience';
import AgenciesWordwide from '../Components/Solutions-Components/AgenciesWordwide';
import WhyChoose from '../Components/Solutions-Components/WhyChoose';
import SocialMediaWallOfLove from '../Components/Solutions-Components/SocialMediaWallOfLove';
import Hero from '../Components/Hero';

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
      <SolutionHeader />
      <Hero largeScreenImg="md:w-1/2">
        <img
          src="./images/hero/send-reminder.webp"
          alt="header bg cover"
          className="flex justify-center items-center rounded-xl relative shadow-xl top-0 "
          loading="lazy"
        />
      </Hero>
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
