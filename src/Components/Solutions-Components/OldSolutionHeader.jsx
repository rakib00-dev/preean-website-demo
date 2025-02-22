import { FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OldSolutionHeader = ({
  solutionLink = '/book-a-call',
  page1stTitle = 'Social Media',
  page2ndTitle = 'Design Services',
  pagePara = 'Create original and eye-catching designs tailored to each social media platforms, be it Instagram, YouTube, Pinterest or beyond. Wether it’s static images or animated posts, boost your marketing efforts with the help our of design team.',
  children,
  done,
}) => {
  return (
    <section className="mx-auto w-full my-20 max-w-7xl ">
      <div className="relative">
        <div
          className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
        >
          <h1
            className={`font-extrabold grid text-[1.85rem] text-center w-full mb-4 leading-8 lg:text-center min-[450px]:w-full md:text-[3rem] lg:w-full lg:leading-13`}
          >
            <span className="text-[#ef457e]">{page1stTitle}</span>
            {page2ndTitle}
          </h1>
          <p
            className={`text-center text-xl px-2 w-full md:px-0 md:w-2/3 md:text-2xl `}
          >
            {pagePara}
          </p>
          {done ? (
            done
          ) : (
            <Link to={solutionLink}>
              <button
                className={
                  'py-2 px-6 rounded-md font-extrabold text-black flex justify-center items-center gap-2 text-lg bg-blue-300 hover:bg-blue-100 cursor-pointer'
                }
              >
                <FaPlayCircle />
                Book A Call
              </button>
            </Link>
          )}
          {children ? (
            children
          ) : (
            <div className="flex absolute px-5 top-0 items-center justify-between -z-10 w-full">
              <img
                src="./images/ourpricingpage/deep-blue-squre.svg"
                alt="this is a blue squre element which is use to inchnge the design quality"
                loading="lazy"
                className="w-10 left-[10%] absolute -top-8 md:w-24"
              />
              <div className="absolue left-[25%] grid w-full">
                <img
                  src="./images/ourworkpage/tringle.svg"
                  alt="this is a tringle element which is use to inchnge the design quality"
                  loading="lazy"
                  className="hidden -top-13 absolute  left-[20%] md:block md:left-[25%]"
                />
              </div>

              <img
                src="./images/solutionPage/social-media/pink-box.svg"
                alt="this is a pink box element which is use to inchnge the design quality"
                loading="lazy"
                className="w-10 absolute -bottom-30 -top-10 md:top-0 right-[10%] md:w-26"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OldSolutionHeader;
