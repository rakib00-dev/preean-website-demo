import PricingFaq from '../Components/PricingPage/PricingFaq';
import SendReqSection from '../Components/SendReqSection';
import SolutionHeader from '../Components/Solutions-Components/OldSolutionHeader';
import React, { Suspense } from 'react';
import SocialMediaWallOfLove from '../Components/Solutions-Components/SocialMediaWallOfLove';
import HowItWorks from '../Components/HowItWorks';
import PowerByTechnology from '../Components/PowerByTechnology';
import WhatWeOffer from '../Components/WhatWeOffer';

const PostOnSocialMedia = React.lazy(() =>
  import('../Components/Solutions-Components/PostOnSocialMedia')
);
const OurSoluWork = React.lazy(() =>
  import('../Components/Solutions-Components/OurSoluWork')
);

const CanvaDesignPage = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SolutionHeader
        page1stTitle="Canva"
        page2ndTitle="Design Service"
        pagePara="Get help from professional Canva designers and create beautiful templates and other designs that make your brand shines."
      />
      {/* our work */}
      <Suspense fallback={<p>Loading...</p>}>
        <OurSoluWork bigTitle="Our latest Canva designs" />
      </Suspense>
      <HowItWorks />
      <PowerByTechnology
        smallTitle="MAke the most of your canva account"
        bigTitle="Get help from a pro Canva designer"
        contentClass="sm:flex-col lg:flex-row w-11/12 mx-20"
        imgSrc="./images/solutionPage/canva-design/canva_pro_photo.avif"
        listChild={<OrderedList3 />}
      />
      <PowerByTechnology
        smallTitle="DESIGN FOR EVERY PLATFORM"
        bigTitle="Elevate your brand with spot-on designs"
        contentClass="sm:flex-col lg:flex-row-reverse w-11/12 mx-20"
        imgSrc="./images/solutionPage/canva-design/every-platform.avif"
        para={
          'Create dozens of new Canva designs that will make your business stand out across all different platforms.'
        }
        listChild={<></>}
      />
      <Suspense fallback={<p>Loading...</p>}>
        <PostOnSocialMedia />
      </Suspense>
      <WhatWeOffer />
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

export default CanvaDesignPage;

const OrderedList3 = () => {
  return (
    <div className="w-full mb-1">
      <ol className="space-y-5">
        <ListItem count={1} text="Account setup & Brand Kit creation" />
        <ListItem count={2} text="Amazing and reusable Brand Templates" />
        <ListItem count={3} text="Design support for all your projects" />
      </ol>
    </div>
  );
};

const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base">
      <span className="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        <span className="bg-blue-500 absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"></span>
        {count}
      </span>
      {text}
    </li>
  );
};
