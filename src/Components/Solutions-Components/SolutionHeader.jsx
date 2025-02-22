import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Button';

const SolutionHeader = ({
  title = 'On-Demand Graphic & Web Design',
  para = 'Get access to our creative team in a few clicks. Simple, fast, and affordable.',
  largeScreenImg = 'md:w-1/2',
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
        className={`md:mx-auto w-full mx-0 pb-20 max-w-7xl items-center  `}
      >
        <div className=" relative flex mx-2 flex-col-reverse top-0 justify-center items-center md:flex-row-reverse md:mx-10 ">
          <div
            className={`mx-auto grid place-items-center top-0 my-12 w-full cursor-pointer md:mt-20 ${largeScreenImg}`}
          >
            {/* imges */}
            {children ? (
              children
            ) : (
              <img
                src="./images/solutionPage/solution-hero.png"
                alt="solution header bg"
                className="flex justify-center items-center rounded-xl relative top-0 w-full"
                loading="lazy"
              />
            )}
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

export default SolutionHeader;
