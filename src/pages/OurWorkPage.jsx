import React, { Suspense } from 'react';
import PageHeader from '../Components/PageHeader';

const OurWorkSamples = React.lazy(() =>
  import('../Components/WorkPage/OurWorkSamples')
);

const OurWorkPage = () => {
  return (
    <div className="mx-auto my-16 w-full max-w-7xl">
      <PageHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <OurWorkSamples />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <AddCreative />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <BrandingLogo />
      </Suspense>
    </div>
  );
};

export default OurWorkPage;

const AddCreative = () => {
  const addCreativeImg = [
    {
      src: './images/solutionPage/ad-creative-work/Crypto.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/ad-creative-work/Food.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/ad-creative-work/interview.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    // {
    //   src: './images/solutionPage/ad-creative-work/Jess.png',
    //   alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    // },
    {
      src: './images/solutionPage/ad-creative-work/Realestate.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Sage.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Silk.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/sumbit.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Tasks.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Victim.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Win.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples bigTitle="Ad Creative Design">
      {addCreativeImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};

const BrandingLogo = () => {
  const addCreativeImg = [
    {
      src: './images/solutionPage/ad-creative-work/Crypto.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/ad-creative-work/Food.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/ad-creative-work/interview.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    // {
    //   src: './images/solutionPage/ad-creative-work/Jess.png',
    //   alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    // },
    {
      src: './images/solutionPage/ad-creative-work/Realestate.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Sage.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Silk.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/sumbit.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Tasks.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Victim.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/ad-creative-work/Win.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples bigTitle="Ad Creative Design">
      {addCreativeImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};
