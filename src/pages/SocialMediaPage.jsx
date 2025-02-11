import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import PricingFaq from '../Components/PricingPage/PricingFaq';
import SendReqSection from '../Components/SendReqSection';
import SolutionHeader from '../Components/Solutions Components/SolutionHeader';

const SocialMediaPage = () => {
  const socialMediaImg = [
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

  const OurSoluWork = ({
    smallTitle = 'our work',
    bigTitle = 'Our latest social media designs',
  }) => {
    return (
      <section className="flex flex-col justify-center items-center mx-auto w-full max-w-7xl md:mt-16 md:pt-10 bg-white overflow-hidden ">
        <div className="flex m-auto justify-center items-center flex-col w-[95%] gap-4 ">
          {/* content */}

          {/* text conent */}
          <div
            className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
          >
            <h1
              className="uppercase font-bold text-[.85rem]"
              style={{ color: 'var(--colors-pink)' }}
            >
              {smallTitle}
            </h1>
            <h2
              className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 lg:text-center min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
            >
              {bigTitle}
            </h2>
          </div>
        </div>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-5 gap-5 w-4/5 mx-45 my-8 md:my-12">
          {socialMediaImg.map((e, i) => (
            <div key={i} className="grid">
              <img
                src={e.src}
                alt={e.alt}
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mx-auto my-8 w-full md:my-12">
          <Link to={'/our-work'}>
            <Button
              text={'All Our Works'}
              className={
                'transition-all border-blue-500 bg-transparent text-blue-500 border-2 hover:bg-blue-500 hover:border-black hover:text-black'
              }
              bg="transparent"
            />{' '}
          </Link>
        </div>
      </section>
    );
  };

  return (
    <section className="mx-auto w-full max-w-7xl">
      <SolutionHeader />
      {/* our work */}
      <OurSoluWork />

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
