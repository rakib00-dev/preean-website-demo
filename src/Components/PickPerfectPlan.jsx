import { useState } from 'react';
import PricingCards from './PricingPage/PricingCards';
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
          <div className="grid place-items-center md:grid-cols-4">
            <HomePagePricing />
            <HomePagePricing
              title="Business"
              description="Get double the output everyday."
            />
            <HomePagePricing
              title="Designated Designer"
              description="Collaborate in real time with your designer."
            />
            <HomePagePricing
              title="Design Team"
              description="Collaborate in real time with your designer."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickPerfectPlan;

const HomePagePricing = ({
  title = 'Advanced',
  description = 'Create all of your everyday designs.',
  titleSize = 'text-xl',
  price = '124',
  bgColor = 'bg-white',
  priceColor = 'gray-900',
  btnText = 'View More',
  btnColor,
  children,
}) => {
  return (
    <div className={`w-[230px] mx-2 left-0 relative`}>
      {/* initial wraper */}
      <div
        className={`border-2 rounded-2xl h-[337px] border-gray-300 px-4 py-5 gap-4 grid ${bgColor} `}
      >
        {children}
        <div className="grid gap-4 pb-5">
          <h5 className={`font-extrabold ${titleSize}`}>{title}</h5>
          <p className="text-lg text-gray-500">{description}</p>
          <h5 className={`text-3xl mt-8 font-extrabold text-${priceColor}`}>
            ${price}/wk
          </h5>
        </div>
        <div className="grid w-full place-items-center mb-5">
          <Link to={'/pricing'}>
            <Button
              className={'text-white md:text-md sm:w-full bg-black'}
              px="55"
              bg={btnColor}
            >
              {btnText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
