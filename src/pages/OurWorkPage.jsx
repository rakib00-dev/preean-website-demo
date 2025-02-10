import React, { Suspense } from 'react';
import PageHeader from '../Components/PageHeader';
const WorkPageWorks = React.lazy(() => import('../Components/WorkPageWorks'));

const OurWorkPage = () => {
  return (
    <div className="mx-auto my-16 w-full max-w-7xl">
      <section className="my-16">
        <PageHeader />
      </section>
      <Suspense fallback={<p>Loading...</p>}>
        <WorkPageWorks />
      </Suspense>
    </div>
  );
};

export default OurWorkPage;
