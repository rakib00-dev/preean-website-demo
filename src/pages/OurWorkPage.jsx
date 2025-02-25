import React, { Suspense, useState } from 'react';
import PageHeader from '../Components/PageHeader';
import { IoIosArrowDown } from 'react-icons/io';

const OurWorkSamples = React.lazy(() =>
  import('../Components/WorkPage/OurWorkSamples')
);

const OurWorkPage = () => {
  return (
    <div className="mx-auto md:my-16 w-full max-w-7xl">
      <WorkNavigation />
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
      <Suspense fallback={<p>Loading...</p>}>
        <Infographics />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Intergrated />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <PrintDesign />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <WebDesign />
      </Suspense>
    </div>
  );
};

export default OurWorkPage;

const WorkNavigation = () => {
  const [isOurWorkHovered, setIsOurWorkHovered] = useState(false);

  const cssStyle = {
    blur: {
      position: 'absolute',
      height: '100%',
      left: 0,
      width: '100%',
      background: '#ffffff42',
      filter: 'blur(42px)',
      zIndex: '-1',
      backdropFilter: 'blur(2px)',
    },
  };

  return (
    <>
      {/* our work drop down large screen*/}
      <div
        className={` transition-all duration-100 sticky top-25 w-full m-auto hidden place-items-center pt-3 gap-3 md:grid`}
        style={{ zIndex: 11 }}
        onMouseOver={() => setIsOurWorkHovered(true)}
        onMouseOut={() => setIsOurWorkHovered(false)}
      >
        <div
          className="flex relative cursor-pointer justify-center items-center gap-2 rounded bg-blue-200/60 p-2 overflow-hidden"
          onMouseOver={() => setIsOurWorkHovered(true)}
          onMouseOut={() => setIsOurWorkHovered(false)}
          onClick={() => setIsOurWorkHovered((prev) => !prev)}
        >
          <h5>Navigate Works</h5>{' '}
          <IoIosArrowDown
            className={
              isOurWorkHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
          <div className={''} style={cssStyle.blur}></div>
        </div>

        <div
          className={`transition-all duration-200 flex flex-wrap rounded-xl bg-white border-gray-100 shadow-xl mx-4 md:mx-0 md:flex-nowrap overflow-hidden ${
            isOurWorkHovered ? 'h-20 border' : 'h-0 border-0'
          }`}
          onMouseOver={() => setIsOurWorkHovered(true)}
          onClick={() => setIsOurWorkHovered((prev) => !prev)}
        >
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#social-media"
          >
            <img
              src="/images/navbar/social-media-logo.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'social media'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#ad-creative"
          >
            <img
              src="/images/navbar/ad-design.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'ad creative'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#branding-logo"
          >
            <img
              src="/images/navbar/logo-design.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'branding logo'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#email-design"
          >
            <img
              src="/images/navbar/mail.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'email design'}
            </h5>
          </a>

          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#infographics-design"
          >
            <img
              src="/images/navbar/infographic-chart.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'infographics design'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#intergrated-campain"
          >
            <img
              src="/images/navbar/connected.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'intergrated campain'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#print-design"
          >
            <img
              src="/images/navbar/print-work.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'print design'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#Web-design"
          >
            <img
              src="/images/navbar/responsive-design.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-sm w-full font-bold">
              {'Web design'}
            </h5>
          </a>
        </div>
      </div>

      {/* our work dropdown small screen */}
      <div
        className={` transition-all duration-300 grid sticky top-15 w-full m-auto place-items-center py-6 gap-3 md:hidden`}
        style={{ zIndex: 11 }}
      >
        <div
          className="flex cursor-pointer relative justify-center items-center gap-2 rounded bg-blue-200/60 p-2 overflow-hidden"
          onClick={() => setIsOurWorkHovered((prev) => !prev)}
        >
          <h5>Navigate Works</h5>{' '}
          <IoIosArrowDown
            className={
              isOurWorkHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
          <div className={''} style={cssStyle.blur}></div>
        </div>

        <div
          className={`transition-all duration-300 grid rounded-xl bg-white border-gray-100 shadow-xl mx-4 overflow-hidden md:mx-0 grid-cols-2 ${
            isOurWorkHovered ? 'h-80 border' : 'h-0 border-0'
          }`}
          onMouseOver={() => setIsOurWorkHovered(true)}
          onClick={() => setIsOurWorkHovered((prev) => !prev)}
        >
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#social-media"
          >
            <img
              src="/images/navbar/social-media-logo.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'social media'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#ad-creative"
          >
            <img
              src="/images/navbar/ad-design.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'ad creative'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#branding-logo"
          >
            <img
              src="/images/navbar/logo-design.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'branding logo'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#email-design"
          >
            <img
              src="/images/navbar/mail.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'email design'}
            </h5>
          </a>

          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#infographics-design"
          >
            <img
              src="/images/navbar/infographic-chart.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'infographics design'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#intergrated-campain"
          >
            <img
              src="/images/navbar/connected.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'intergrated campain'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#print-design"
          >
            <img
              src="/images/navbar/print-work.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'print design'}
            </h5>
          </a>
          <a
            className={`flex gap-2 justify-start items-center w-fit rounded-md DropItemHover px-2 py-6 `}
            href="#Web-design"
          >
            <img
              src="/images/navbar/responsive-design.png"
              alt=""
              className={`p-1 rounded bg-gray-100/80 h-8`}
              loading="lazy"
            />
            <h5 className="capitalize text-xs w-full font-bold">
              {'Web design'}
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

const AddCreative = () => {
  const addCreativeImg = [
    {
      src: '/images/solutionPage/ad-creative-work/Crypto.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/ad-creative-work/Food.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/ad-creative-work/interview.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    // {
    //   src: '/images/solutionPage/ad-creative-work/Jess.png',
    //   alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    // },
    {
      src: '/images/solutionPage/ad-creative-work/Realestate.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/ad-creative-work/Sage.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/ad-creative-work/Silk.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/ad-creative-work/sumbit.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/ad-creative-work/Tasks.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/ad-creative-work/Victim.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/ad-creative-work/Win.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      id="ad-creative"
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
      src: '/images/solutionPage/branding-logo-work/6.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Bali.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Basis.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Bestias.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Brine.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/branding-logo-work/business.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/branding-logo-work/Cappadocia.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/branding-logo-work/Car.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/branding-logo-work/Church.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/branding-logo-work/Coffee.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/branding-logo-work/East.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Easter.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Fresh.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Frist Health.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Greener.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Grow.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Health.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Life.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Mediheart.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Movement.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Nymph.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Pilates.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/property.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Salsa.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Tagline.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Welcome.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/branding-logo-work/Zumba.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      id="branding-logo"
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
      src: '/images/solutionPage/email-work/Collagen.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/email-work/Fathers.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/email-work/Ferret.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/email-work/Furniture.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/email-work/Limited.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/email-work/Offers.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/email-work/Ruggable.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/email-work/Stout.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/email-work/Yaysay.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      id="email-design"
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

const Infographics = () => {
  const infoImg = [
    {
      src: '/images/solutionPage/infographics-work/Binge.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/infographics-work/Design.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/infographics-work/Entrepreneur.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/infographics-work/High.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/infographics-work/Kombuchia.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/infographics-work/Lubhasadh.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/infographics-work/Mexico.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/infographics-work/Morning.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/infographics-work/Proper.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/infographics-work/Sanitize.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/infographics-work/Syptoms.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/infographics-work/Tax.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      id="infographics-design"
      bigTitle="Infographics Designs"
      para="Custom branded white papers, guides, eBooks, and other digital reports deserve stellar design. Let’s rid the world of boring, plain white papers and thrill audiences with meaningful charts, infographics, interesting typography, illustrations, and more. Leave a lasting, valuable impression with professional layouts and editable final design files."
    >
      {infoImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};

const Intergrated = () => {
  const inteImg = [
    {
      src: '/images/solutionPage/intergrated-campains-work/Connect.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/intergrated-campains-work/Furniture.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/intergrated-campains-work/Live.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/intergrated-campains-work/Oil.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/intergrated-campains-work/Physical.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/intergrated-campains-work/Prime.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/intergrated-campains-work/Renovations.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/intergrated-campains-work/School.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/intergrated-campains-work/Stock.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/intergrated-campains-work/Underline.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/intergrated-campains-work/Wear.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/intergrated-campains-work/Yogurt.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      id="intergrated-campain"
      bigTitle="Intergrated Campain Designs"
      para="Custom branded white papers, guides, eBooks, and other digital reports deserve stellar design. Let’s rid the world of boring, plain white papers and thrill audiences with meaningful charts, infographics, interesting typography, illustrations, and more. Leave a lasting, valuable impression with professional layouts and editable final design files."
    >
      {inteImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};

const PrintDesign = () => {
  const printImg = [
    {
      src: '/images/solutionPage/print-design-work/Amazon.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Arrived.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/avorvedic.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Better.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/build.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/print-design-work/Business.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/print-design-work/Christmas.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/print-design-work/Commerical.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/print-design-work/Dry.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Electronics.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/fishing.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Free.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Grow.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Handy.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Heart.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Kibsi.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Math.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Menu.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Money.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Moved.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Never.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Note.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Rare.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Steel.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/Student.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/print-design-work/yoga.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      id="print-design"
      bigTitle="Print Designs"
      para="We promise print is not dead. From traditional book design to magazines, posters, as well as corporate print designs for fliers, menus, and business cards. Get custom branded renders and print-ready designs in any format, on-demand."
    >
      {printImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};

const WebDesign = () => {
  const webImg = [
    {
      src: '/images/solutionPage/web-design-work/2.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/web-design-work/6.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/web-design-work/amazon.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/web-design-work/Coffee3.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/web-design-work/Fitness.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/web-design-work/organic.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/web-design-work/shoees.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/web-design-work/sure.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/web-design-work/website.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <OurWorkSamples
      id="Web-design"
      bigTitle="Website Designs"
      para="User interface graphics and designs are one of the most important first impressions your brand makes in our digital world. Getting new custom branded heroes, landing pages, widgets and other UI elements and designs is easier than ever, now delivered in Figma-ready formats!"
    >
      {webImg.map((e, i) => (
        <div key={i} className="grid">
          <img src={e.src} alt={e.alt} loading="lazy" className="rounded-xl" />
        </div>
      ))}
    </OurWorkSamples>
  );
};
