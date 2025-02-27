import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = ({
  title = 'On-Demand Graphic & Web Design',
  para = 'Get access to our creative team in a few clicks. Simple, fast, and affordable.',
  largeScreenImg = 'md:w-4/5',
  children,
}) => {
  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: 'spring',
        }}
        className={`md:mx-auto w-full my-6 md:my-0 mx-0 md:mb-10 pb-20 md:pb-40 max-w-7xl items-center overflow-hidden  `}
      >
        <div className="relative flex mx-2 py-20 flex-col-reverse top-0 justify-center items-center md:flex-row-reverse md:mx-10 ">
          <div
            className={`mx-auto grid place-items-center top-0 mt-44 mb-50 w-full cursor-pointer md:mt-20 md:mb-20 ${largeScreenImg}`}
          >
            {/* imges */}
            {children ? (
              children
            ) : (
              <div
                className="relative m-auto mt-4 h-auto w-full"
                style={{ zIndex: 1 }}
              >
                <div className="relative m-auto shadow-[10px_10px_45px_5px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col justify-center items-center w-full scale-90 md:scale-90">
                  <>
                    <div className="px-6 pb-6 pt-2 grid gap-5 bg-white rounded-xl border-gray-200 border-2 shadow-2xl absolute cardOne">
                      <h1 className="md:text-2xl text-xs font-bold bg-gray-100 p-4 rounded-2xl ">
                        Reduce no-shows and stay on track
                      </h1>
                      <img
                        src="./images/hero/send-reminder.webp"
                        alt="header bg cover"
                        className="flex justify-center items-center rounded-xl relative shadow-xl top-0 w-full"
                        loading="lazy"
                      />
                    </div>

                    <div className="px-6 pb-6 pt-2 grid gap-5 bg-white rounded-xl border-gray-200 border-2 shadow-2xl  absolute cardTwo  ">
                      <h1 className="md:text-2xl text-xs font-bold bg-gray-100 p-4 rounded-2xl ">
                        Share your booking page
                      </h1>
                      <img
                        src="./images/hero/send-book.webp"
                        alt="header bg cover"
                        className="flex justify-center items-center rounded-xl relative shadow-xl top-0 w-full"
                        loading="lazy"
                      />
                    </div>
                  </>

                  {/* <div className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-15 h-15 playWave" />  */}
                </div>
              </div>
            )}
            {/* animation img */}
            <DumbbellShape
              className={
                'absolute w-[30rem] dumbbellShapeAnima hidden md:block'
              }
            />
            <TriangleShape
              className={
                'absolute w-[36rem] triangleShapeAnima hidden md:block'
              }
            />
          </div>

          {/* content */}
          <div className="leading-14 w-full mt-4 md:w-[40%]">
            <h1 className="text-3xl text-center text-gray-600 font-[900] w-full md:text-[3rem] md:text-start">
              {title}
            </h1>
            <p className="text-xl text-center py-4 md:text-start lg:text-2xl md:w-4/5">
              {para}
            </p>
            <Link
              to="/pricing"
              className="flex justify-center md:justify-start"
            >
              <Button
                text={'pick your plan'}
                px="30"
                py="0"
                className={'text-white uppercase'}
              />
            </Link>
          </div>
          {/* <img
            src="./images/ourpricingpage/deep-blue-squre.svg"
            alt="play"
            className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-[1000px] -top-40 -right-64 -z-30 rotateAnimation"
            loading="lazy"
          /> */}
        </div>
      </motion.header>
    </>
  );
};

export default Hero;

const DumbbellShape = ({ className, fill = '#0099ff' }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 547 547"
      className={className}
      fill={fill}
    >
      <path d="M364.67,164.38h0c-.61,0-1.22.04-1.83.05C350.38,71.51,274.33,0,182.33,0h0C81.63,0,0,85.65,0,191.31h0c0,105.66,81.63,191.31,182.33,191.31h0c.61,0,1.22-.04,1.83-.05,12.46,92.93,88.5,164.43,180.51,164.43h0c100.7,0,182.33-85.65,182.33-191.31h0c0-105.66-81.63-191.31-182.33-191.31Z" />
    </svg>
  );
};

const TriangleShape = ({ className, fill = '#e55cff' }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 404.79 144.15"
      className={className}
      fill={fill}
    >
      <path d="m171.68,7.91L12.27,95.03c-20.27,11.08-13.96,49.18,8.14,49.12l364.05-.85c22.08-.05,28.29-38.16,8-49.16L233.1,7.79c-19.25-10.43-42.21-10.39-61.43.11Z" />
    </svg>
  );
};
