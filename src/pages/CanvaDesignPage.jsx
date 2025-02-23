import React, { Suspense } from 'react';

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

const CanvaDesignPage = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SolutionHeader
        title="On-Demand Canva Design Graphic"
        largeScreenImg="md:w-1/2"
      ></SolutionHeader>
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
