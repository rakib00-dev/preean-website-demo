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
        <OurWorkSamples />
      </Suspense>
    </div>
  );
};

export default OurWorkPage;

const AddCreative = () => {
  const addCreativeImg = [
    {
      src: './images/solutionPage/social-media-work/Flex.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/social-media-work/Health.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/social-media-work/Glow.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/social-media-work/Realesatate.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/social-media-work/Health2.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/social-media-work/Master.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/social-media-work/Nutrition.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/social-media-work/Open.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/social-media-work/Perfect.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/social-media-work/Pit.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples>
      {addCreativeImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};
