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

const MotioinGraphicsPage = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SolutionHeader
        title="On-Demand Print Design "
        largeScreenImg="md:w-1/2"
      ></SolutionHeader>
      {/* filter section -><- */}
      <SolutionFilter />
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

export default MotioinGraphicsPage;
