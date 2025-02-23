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
      <Suspense fallback={<p>Loading...</p>}>
        <Email />
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
    <OurWorkSamples
      bigTitle="Ad Creative Designs"
      para="When you’re competing for clicks in a crowded digital landscape, ad design must be eye-catching, unique, and memorable. Get all formats, dimensions and configurations adapted across channels and platforms in a breeze, in static and motion formats."
    >
      {addCreativeImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};

const BrandingLogo = () => {
  const brandingLogo = [
    {
      src: './images/solutionPage/branding-logo-work/6.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Bali.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Basis.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Bestias.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Brine.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/branding-logo-work/business.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/branding-logo-work/Cappadocia.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/branding-logo-work/Car.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/branding-logo-work/Church.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/branding-logo-work/Coffee.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/branding-logo-work/East.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Easter.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Fresh.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Frist Health.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Greener.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Grow.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Health.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Life.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Mediheart.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Movement.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Nymph.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Pilates.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/property.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Salsa.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Tagline.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Welcome.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/branding-logo-work/Zumba.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      bigTitle="Branding Logo Designs"
      para="You’ve got a vision for your brand, we’ve got the top-notch branding and logo designers hungry for another exciting branding adventure. Whether you’re redesigning or starting from scratch, getting new logo concepts or updating a huge multiverse of branded materials, we don’t sweat the small stuff."
    >
      {brandingLogo.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};

const Email = () => {
  const emailImg = [
    {
      src: './images/solutionPage/email-work/Collagen.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/email-work/Fathers.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/email-work/Ferret.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/email-work/Furniture.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: './images/solutionPage/email-work/Limited.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/email-work/Offers.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/email-work/Ruggable.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/email-work/Stout.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: './images/solutionPage/email-work/Yaysay.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      bigTitle="Email Designs"
      para="From beautiful email heroes to fully designed robust visual email campaigns, don’t delay and sacrifice another personalization opportunity! Get the static and motion components for every email and what your click and conversion rates climb. Note: HTML design not included."
    >
      {emailImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};
