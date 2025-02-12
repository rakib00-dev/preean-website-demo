import PricingFaq from '../Components/PricingPage/PricingFaq';
import SendReqSection from '../Components/SendReqSection';
import SolutionHeader from '../Components/Solutions-Components/SolutionHeader';
import React, { Suspense } from 'react';
import TargetAudience from '../Components/Solutions-Components/TargetAudience';
import AgenciesWordwide from '../Components/Solutions-Components/AgenciesWordwide';
import WhyChoose from '../Components/Solutions-Components/WhyChoose';
import SocialMediaWallOfLove from '../Components/Solutions-Components/SocialMediaWallOfLove';

const PostOnSocialMedia = React.lazy(() =>
  import('../Components/Solutions-Components/PostOnSocialMedia')
);
const OurSoluWork = React.lazy(() =>
  import('../Components/Solutions-Components/OurSoluWork')
);

const SocialMediaPage = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SolutionHeader />
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
      <PricingFaq
        firstTile="What's the turnaround time?"
        p1="Turnaround time depends on various factors, including the type and complexity of the task, the quality of the design brief and the number of revisions needed. On average, you can expect to receive your design the next business day with our Advanced and Business plans and on the same day with our Dedicated Designer plan."
        secondTitle="How much does it cost? What’s included?"
        p2="Our plans start at $549/mo, all included and no hidden fees. You can see the full pricing here. We don’t charge per project or revision. For a flat monthly fee, you get access to our design team, Monday to Friday, all year long. Everyday you can expect to receive significant design work on one or multiple projects depending on your plan. You can learn more about how we work here."
        thirdTitle="Do I always work with the same designer?"
        p3="We assign your request to the best designer for the job. If you submit multiple requests of the same “type” (for instance social media graphics), they will all go to the same designer. You can also choose to work with different designers and ask for a designer change at anytime."
        fourthTitle="What design tools do you use? Will I get the source files?"
        p4="Our designers use the Adobe Creative Suite, Figma and Canva. Source files (PSD, AI, INDD, FIG) are always included along with PNG, JPEG, SVG & PDF."
        fifthTitle="Do you also do social media videos and motion graphics?"
        p5="Yes we do. As part of our Business and Dedicated Designer plans, you can submit motion graphics and video editing requests. You can view our full scope of services here."
      />
      <SendReqSection />
    </section>
  );
};

export default SocialMediaPage;
