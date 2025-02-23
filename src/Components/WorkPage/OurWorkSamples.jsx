import { Link } from 'react-router-dom';
import Button from '../Button';

const OurWorkSamples = ({
  id = 'social-media',
  bigTitle = 'social media designs',
  para = 'Engaging designs are a must for every platform in order to grab the attention of your target audience. Get custom branded, innovative, and platform-ready designs and templates, from static to motion and video, in every dimension you need! From Instagram to TikTok, from posts to stories, stand out and scale your social media output.',
  children,
}) => {
  const socialMediaImg = [
    {
      src: '/images/solutionPage/social-media-work/Flex.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/social-media-work/Health.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/social-media-work/Glow.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/social-media-work/Realesatate.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
    {
      src: '/images/solutionPage/social-media-work/Health2.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/social-media-work/Master.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/social-media-work/Nutrition.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/social-media-work/Open.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/social-media-work/Perfect.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },

    {
      src: '/images/solutionPage/social-media-work/Pit.png',
      alt: 'this is a social media work of design pro agency and this photo is done by design pro',
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center mx-auto w-full max-w-7xl pt-20 px-3 md:px-6 md:mt-16 bg-white overflow-hidden "
    >
      <div className="grid w-[95%] gap-4 ">
        {/* content */}
        {/* text conent */}
        <h2
          className={`font-extrabold capitalize text-[1.65rem] w-[95%] leading-8 md:text-start min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
        >
          {bigTitle}
        </h2>
        <p className="text-4">{para}</p>
      </div>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-5 gap-5 w-[95%] mt-8 md:mt-12">
        {children
          ? children
          : socialMediaImg.map((e, i) => (
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
      <div className="flex justify-center items-center mx-auto mt-10 mb-6 w-full">
        <Link to={'/book-a-call'}>
          <Button
            text={'Get Started'}
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

export default OurWorkSamples;
