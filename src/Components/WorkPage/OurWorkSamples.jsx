import { Link } from 'react-router-dom';
import Button from '../Button';

const OurWorkSamples = ({
  smallTitle = 'our work',
  bigTitle = 'Our latest social media designs',
  children,
}) => {
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
      <div className="flex justify-center items-center mx-auto mt-16 mb-6 w-full">
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

export default OurWorkSamples;
