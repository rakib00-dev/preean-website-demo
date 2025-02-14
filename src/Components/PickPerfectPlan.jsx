import { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const PickPerfectPlan = () => {
  const [isFirstBtnActive, setIsFirstBtnActive] = useState(true);
  const [isSecondBtnActive, setIsSecondBtnActive] = useState(false);
  const [isThirdBtnActive, setIsThirdBtnActive] = useState(false);

  return (
    <section className="mx-auto w-full max-w-7xl my-20">
      <div className="mx-3 md:mx-16">
        <div
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:my-8 md:mx-12`}
        >
          <h1
            className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            enjoy best plans
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-full mb-4 leading-8 lg:text-start md:text-[2.1rem] md:w-4/5 lg:text-[2.5rem] lg:leading-13`}
          >
            Choose the ideal plan that suits your team's needs.
          </h2>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center gap-4 md:mx-12 md:justify-start">
          <div className="mx-auto my-8  w-fit max-w-screen-md text-center mb-8 lg:mb-12">
            <div className="uppercase gap-2 flex justify-center items-center bg-gray-100 py-2 px-1 rounded-xl">
              <button
                className={
                  isFirstBtnActive
                    ? `uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                    : `uppercase font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
                }
                onClick={() => {
                  setIsFirstBtnActive(true);
                  setIsSecondBtnActive(false);
                  setIsThirdBtnActive(false);
                }}
              >
                weekly
              </button>
              <button
                className={
                  isSecondBtnActive
                    ? `relative uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                    : `relative uppercase font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
                }
                onClick={() => {
                  setIsFirstBtnActive(false);
                  setIsSecondBtnActive(true);
                  setIsThirdBtnActive(false);
                }}
              >
                monthly
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/save-10.svg"
                  alt="save 10 percent on monthly purchess"
                  className=" absolute hidden -top-13  md:block "
                />
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/small-save-10.svg"
                  alt="save 10 percent on monthly purchess"
                  className=" absolute -top-6 md:hidden"
                />
              </button>
              <button
                className={
                  isThirdBtnActive
                    ? `relative uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                    : `relative uppercase font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
                }
                onClick={() => {
                  setIsFirstBtnActive(false);
                  setIsSecondBtnActive(false);
                  setIsThirdBtnActive(true);
                }}
              >
                quarterly
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/save-20.svg"
                  alt="save 20 percent on monthly purchess"
                  className=" absolute hidden -right-20 -top-13  md:block "
                />
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/small-save-20.svg"
                  alt="save 20 percent on monthly purchess"
                  className=" absolute -top-6 md:hidden"
                />
              </button>
            </div>
          </div>
          <div className="grid place-items-center gap-5 md:gap-0 md:grid-cols-4">
            {isFirstBtnActive ? (
              <WeeklyCards />
            ) : isSecondBtnActive ? (
              <MonthlyCards />
            ) : (
              <QuarterlyCards />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickPerfectPlan;

const WeeklyCards = () => {
  return (
    <>
      <HomePagePricing btnColor="bg-transparent border sm:text-black hover:text-gray-400" />
      <HomePagePricing
        price="250"
        title="Business"
        btnColor="bg-black hover:bg-black/80"
        borderColor="gray-900"
        description="Get double the output everyday."
      />
      <HomePagePricing
        price="325"
        title="Designated Designer"
        titleSize="text-[19px]"
        borderColor="[#0099f6]"
        description="Collaborate in real time with your designer."
        btnColor="bg-blue-500 hover:bg-blue-400"
      />
      <HomePagePricing
        price="599"
        title="Design Team"
        bgColor="bg-[#0b3558]"
        lastColor={'text-white'}
        descColor="white"
        borderColor="gray-900"
        btnColor="bg-transparent border hover:text-gray-300"
        description="Collaborate in real time with your designer."
      />
    </>
  );
};

const MonthlyCards = () => {
  return (
    <>
      <HomePagePricing
        price="124"
        btnColor="bg-transparent border sm:text-black hover:text-gray-400"
      />
      <HomePagePricing
        price="225"
        title="Business"
        btnColor="bg-black hover:bg-black/80"
        borderColor="gray-900"
        description="Get double the output everyday."
      />
      <HomePagePricing
        price="293"
        title="Designated Designer"
        titleSize="text-[19px]"
        borderColor="[#0099f6]"
        description="Collaborate in real time with your designer."
        btnColor="bg-blue-500 hover:bg-blue-400"
      />
      <HomePagePricing
        price="540"
        title="Design Team"
        bgColor="bg-[#0b3558]"
        lastColor={'text-white'}
        descColor="white"
        borderColor="gray-900"
        btnColor="bg-transparent border hover:text-gray-300"
        description="Collaborate in real time with your designer."
      />
    </>
  );
};

const QuarterlyCards = () => {
  return (
    <>
      <HomePagePricing
        price="110"
        btnColor="bg-transparent border sm:text-black hover:text-gray-400"
      />
      <HomePagePricing
        price="200"
        title="Business"
        btnColor="bg-black hover:bg-black/80"
        borderColor="gray-900"
        description="Get double the output everyday."
      />
      <HomePagePricing
        price="250"
        title="Designated Designer"
        titleSize="text-[19px]"
        borderColor="[#0099f6]"
        description="Collaborate in real time with your designer."
        btnColor="bg-blue-500 hover:bg-blue-400"
      />
      <HomePagePricing
        price="480"
        title="Design Team"
        bgColor="bg-[#0b3558]"
        lastColor={'text-white'}
        descColor="white"
        borderColor="gray-900"
        btnColor="bg-transparent border hover:text-gray-300"
        description="Collaborate in real time with your designer."
      />
    </>
  );
};

const HomePagePricing = ({
  title = 'Advanced',
  description = 'Create all of your everyday designs.',
  titleSize = 'text-xl',
  price = '138',
  bgColor = 'bg-white',
  priceColor = 'gray-900',
  btnText = 'View More',
  borderColor = 'gray-300',
  descColor = 'gray-500',
  lastColor,
  btnColor = 'bg-black',
  children,
}) => {
  return (
    <div className={`w-[230px] mx-2  rounded-2xl left-0 relative`}>
      {/* initial wraper */}
      <div
        className={`border border-t-8 rounded-2xl h-[337px] px-4 py-5 gap-4 grid ${bgColor} border-${borderColor}`}
      >
        {children}
        <div className={`grid gap-4 pb-5 ${lastColor}`}>
          <h5 className={`font-extrabold ${titleSize}`}>{title}</h5>
          <p className={`text-lg text-${descColor}`}>{description}</p>
          <h5 className={`text-3xl mt-8 font-extrabold text-${priceColor}`}>
            ${price}/wk
          </h5>
        </div>
        <div className="grid w-full place-items-center mb-5">
          <Link
            to={'/pricing'}
            className={`transition-all text-white text-center py-2 px-4 rounded-xl md:text-md sm:w-full ${btnColor}`}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};
