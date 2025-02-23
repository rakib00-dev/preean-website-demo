import React, { Suspense } from 'react';
import PageHeader from '../Components/PageHeader';
import OurWorkSamples from '../Components/WorkPage/OurWorkSamples';
const WorkPageWorks = React.lazy(() => import('../Components/WorkPageWorks'));

const OurWorkPage = () => {
  return (
    <div className="mx-auto my-16 w-full max-w-7xl">
      <PageHeader />
      <OurWorkSamples />
      <Suspense fallback={<p>Loading...</p>}>
        <WorkPageWorks />
      </Suspense>
    </div>
  );
};

export default OurWorkPage;
