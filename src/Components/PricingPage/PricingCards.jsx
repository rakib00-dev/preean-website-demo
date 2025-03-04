import { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { FaLongArrowAltDown } from 'react-icons/fa';

const PricingCards = () => {
  const [isFirstBtnActive, setIsFirstBtnActive] = useState(true);
  const [isSecondBtnActive, setIsSecondBtnActive] = useState(false);
  const [isThirdBtnActive, setIsThirdBtnActive] = useState(false);

  return (
    <>
      <section className="bg-white mx-auto w-full max-w-7xl md:mt-10">
        <div className="py-8 px-4 mx-auto lg:py-16">
          <div className="mx-auto flex flex-col md:flex-row gap-2 items-center w-fit max-w-screen-md text-center mb-8 lg:mb-12">
            <div className="uppercase gap-2 flex justify-center items-center bg-gray-200 py-2 px-1 rounded-xl">
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
                monthly
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
                quarterly
                {/* <img
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
                /> */}
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
                annually
                {/* <img
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
                /> */}
              </button>
            </div>{' '}
            <p className="text-sm w-fit h-fit text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
              Save up to 20%
            </p>
          </div>
          <div className="flex justify-center items-center mx-auto">
            {isFirstBtnActive ? (
              <FilterCardPackage />
            ) : isSecondBtnActive ? (
              <FilterCardPackage
                firstPrice="124"
                secondPrice="225"
                thirdPrice="293"
                fourthPrice="540"
              />
            ) : (
              <FilterCardPackage
                firstPrice="110"
                secondPrice="200"
                thirdPrice="250"
                fourthPrice="480"
              />
            )}
          </div>
        </div>
      </section>
      {/* <WebflowDevelopment /> */}
      <section className="mx-auto w-full grid place-items-center max-w-7xl">
        <div className="bg-[#0b3558] grid place-items-center w-full  rounded-xl">
          <div className="grid justify-center items-center w-auto gap-2 p-6 py-10 h-auto place-items-center md:grid-cols-2">
            {/* cards */}
            <div className="flex flex-col justify-end  gap-2 md:gap-5 w-full ">
              <h5
                className="py-2 px-4 w-fit rounded-full flex justify-end text-sm font-extrabold uppercase  bg-red-400 text-white"
                style={{ color: 'white' }}
              >
                Add-on
              </h5>
              <h3
                className="w-fit font-extrabold text-2xl text-white md:text-3xl"
                style={{ color: 'white' }}
              >
                Webflow Development
              </h3>
            </div>
            <div className="grid gap-2 md:gap-5 md:w-60">
              <img
                src="./images/ourpricingpage/webflow/webflow-logo.svg"
                alt="Transform your Figma designs into live Webflow websites"
              />
              <p className="text-sm text-white ">
                Transform your Figma designs into live Webflow websites
              </p>
            </div>
          </div>
          <div className="flex place-items-center pb-5 gap-2 md:gap-5 w-full md:w-fit ">
            <div>
              <h5
                className="text-lg font-extrabold text-white"
                style={{ color: 'white' }}
              >
                started at
              </h5>
              <span className="text-white font-[900] text-2xl">
                {isFirstBtnActive
                  ? 'USD $124/wk'
                  : isSecondBtnActive
                  ? 'USD $124/wk'
                  : 'USD $100/wk'}
              </span>
            </div>
            <Link to={'/book-a-call'}>
              <button
                className={
                  'py-2 px-6 rounded-md font-bold text-white text-lg bg-blue-500 hover:bg-blue-100 cursor-pointer'
                }
              >
                Book A Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingCards;

const FilterCardPackage = ({
  firstPrice = '138',
  secondPrice = '250',
  thirdPrice = '325',
  fourthPrice = '599',
}) => {
  return (
    <div className="w-full md:mx-4 relative grid grid-cols-1 md:grid-cols-4 gap-5">
      <PricingCard
        price={firstPrice}
        subscription="year"
        btnColor="bg-gray-800 hover:bg-gray-600"
        description="Create all of your everyday designs."
        buttonText="Choose Personal"
        doneImgStyle={{
          filter: 'hue-rotate(180deg) saturate(0%) brightness(0%)',
        }}
      ></PricingCard>
      <PricingCard
        title="Standard"
        description="Get double the output everyday."
        price={secondPrice}
        feature1stList="2 Daily Output"
        feature2ndList="Next-Day Delivery"
        DesignLockColor="black"
        doneImgStyle={{
          filter: 'hue-rotate(180deg) saturate(0%) brightness(0%)',
        }}
      ></PricingCard>
      <PricingCard
        title="Premium"
        description="For growing businesses"
        price={thirdPrice}
        feature1stList="1 Designated Designer"
        feature2stList="Same-Day Delivery"
        to="/book-a-call"
        btnText="Book A Call"
        priceColor="black text-extrabold"
        featureLockColor="black"
        DesignLockColor="black"
        thirdChild
      >
        <img
          src="./images/ourpricingpage/card-images/most-popular.webp"
          alt=""
          loading="lazy"
          className="absolute w-45 -top-10 -right-0 md:-right-14 md:-top-14 md:w-55"
        />
      </PricingCard>
      <PricingCard
        title="Enterprise"
        description="For large companies."
        price={fourthPrice}
        to="/book-a-call"
        btnText="Book A Call"
        priceColor="black text-extrabold"
        feature1stList="2 Designated Designer"
        feature2stList="Same-Day Delivery"
        featureLockColor="black"
        DesignLockColor="black"
        doneImgStyle={{
          filter: 'hue-rotate(180deg) saturate(0%) brightness(0%)',
        }}
      ></PricingCard>
    </div>
  );
};

const PricingCard = ({
  title = 'Basic',
  description = 'Create all of your everyday designs.',
  price = '124',
  done = './images/ourpricingpage/card-images/done.svg',
  feature1stList = '1 Daily Output',
  feature2ndList = '1-2 Day Delivery',
  featureLockColor = 'gray-400',
  DesignLockColor = 'gray-400',
  // done = './images/ourpricingpage/card-images/lock.svg',
  // done = './images/ourpricingpage/card-images/lock.svg',
  doneImgStyle,
  bgColor = 'bg-white',
  priceColor = 'blue-500',
  thirdChild,
  to = '/contact',
  btnText = 'Get Started',
  btnColor = 'bg-blue-500 hover:bg-blue-400',
  children,
}) => {
  const [isViewMore, setIsViewMore] = useState(false);

  return (
    <>
      <div className={`md:w-[280px] mx-2 left-0 relative`}>
        {/* initial wraper */}
        <div
          className={`border-2 relative rounded-2xl border-gray-300/30 shadow-xl p-4 gap-4 grid ${bgColor} `}
        >
          {/* {children} */}
          {thirdChild && (
            <span className="absolute top-0 right-0 text-sm bg-blue-500 font-bold text-white capitalize py-1 px-2 rounded-bl-2xl rounded-tr-2xl ">
              recommended plan
            </span>
          )}
          <div className="relative grid gap-1 pb-0">
            <h5 className=" font-extrabold text-2xl pt-1">{title}</h5>
            <p className="text-sm font-medium text-gray-500">{description}</p>
            <h5 className={`text-3xl mt-7 font-extrabold text-${priceColor}`}>
              ${price}
              <span className="text-lg">/mo</span>
            </h5>
            <div className="grid place-items-center my-5 gap-4 w-full overflow-hidden">
              <Link
                to={to}
                className={`transition-all duration-200 text-white md:text-lg font-semibold ${btnColor} py-3 px-18 rounded-xl`}
              >
                {btnText}
              </Link>
            </div>
          </div>
          <span className="text-[#0b3558] text-xs font-bold flex justify-start gap-2 items-center">
            This is our {title} <FaLongArrowAltDown />
          </span>
          <div
            className={`transition-all duration-300 grid gap-4 pt-3 overflow-hidden ${
              isViewMore ? 'h-96' : 'h-56'
            }`}
          >
            <h5 className="text-lg font-extrabold">Features</h5>
            <ul className="grid gap-4 *:font-medium *:text-gray-600">
              <li className="flex text-sm gap-2 ">
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  {feature1stList}
                </span>
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  {feature2ndList}
                </span>
              </li>
              <li className={`flex text-sm gap-2 text-${featureLockColor}`}>
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="lock meaning it will not given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  Real Time Slack Communication
                </span>
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  Design Services
                </span>
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  Web Design
                </span>
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  Illustrations
                </span>
              </li>
              <li className={`flex text-sm gap-2 text-${DesignLockColor}`}>
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="lock meaning it will not given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  Motion Graphics
                </span>
              </li>
              <li className={`flex text-sm gap-2 text-${DesignLockColor}`}>
                <img
                  loading="lazy"
                  src={done}
                  style={doneImgStyle}
                  alt="lock meaning it will not given to client"
                  className="w-4"
                />
                <span className="border-b-2 border-dotted border-gray-400">
                  Video Editing
                </span>
              </li>
            </ul>
          </div>
          <span
            className="text-white text-center cursor-pointer rounded-2xl py-3 bg-black"
            onClick={() => {
              setIsViewMore((prev) => !prev);
            }}
          >
            {isViewMore ? 'view Less...' : 'view More...'}
          </span>
          {/* <div className="grid gap-4">
            <h5 className="text-xl font-extrabold ">Tools</h5>
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="./images/ourpricingpage/card-images/cloud.svg"
                alt="adobe cloud is a designer choice"
                className="w-10"
              />
              <img
                loading="lazy"
                src="./images/ourpricingpage/card-images/figma.svg"
                alt="figma is used to build website design"
                className="w-10"
              />
              <img
                loading="lazy"
                src="./images/ourpricingpage/card-images/canva.svg"
                alt="canva is use to create beautiful graphic design work"
                className="w-10"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
