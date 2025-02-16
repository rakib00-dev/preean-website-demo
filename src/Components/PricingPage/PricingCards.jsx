import { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const PricingCards = () => {
  const [isFirstBtnActive, setIsFirstBtnActive] = useState(true);
  const [isSecondBtnActive, setIsSecondBtnActive] = useState(false);
  const [isThirdBtnActive, setIsThirdBtnActive] = useState(false);

  return (
    <>
      <section className="bg-white mx-auto w-full max-w-7xl ">
        <div className="py-8 px-4 mx-auto lg:py-16">
          <div className="mx-auto w-fit max-w-screen-md text-center mb-8 lg:mb-12">
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
        <div className="bg-purple-600 grid place-items-center mx-2 md:mx-20 w-fit  rounded-xl">
          <div className="grid justify-center items-center w-auto gap-2 p-6 py-10 h-auto place-items-center md:grid-cols-3">
            {/* cards */}
            <div className="flex flex-col gap-2 md:gap-5 w-full ">
              <h5
                className="py-2 px-4 w-fit rounded-full text-sm font-extrabold uppercase  bg-red-400 text-white"
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
            <div className="grid gap-2 md:gap-5 w-full md:w-fit ">
              <div>
                <h5
                  className="text-lg font-extrabold text-white"
                  style={{ color: 'white' }}
                >
                  started at
                </h5>
                <span className="text-yellow-400 font-[900] text-2xl">
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
                    'py-2 px-6 rounded-md font-extrabold text-black text-lg bg-amber-300 hover:bg-amber-100 cursor-pointer'
                  }
                >
                  Book A Call
                </button>
              </Link>
            </div>
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
      ></PricingCard>
      <PricingCard
        title="Business"
        description="Get double the output everyday."
        price={secondPrice}
        feature1stList="2 Daily Output"
        feature2ndList="Next-Day Delivery"
        DesignLockColor="black"
      ></PricingCard>
      <PricingCard
        title="Designated Designer"
        description="For growing businesses"
        price={thirdPrice}
        feature1stList="1 Designated Designer"
        feature2stList="Same-Day Delivery"
        btnText="Book A Call"
        priceColor="black text-extrabold"
        featureLockColor="black"
        DesignLockColor="black"
        doneImgStyle={{
          filter: 'hue-rotate(180deg) saturate(0%) brightness(189%)',
        }}
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
        title="Design Team"
        description="For large companies."
        price={fourthPrice}
        btnText="Book A Call"
        priceColor="black text-extrabold"
        feature1stList="2 Designated Designer"
        feature2stList="Same-Day Delivery"
        featureLockColor="black"
        DesignLockColor="black"
        doneImgStyle={{
          filter: 'hue-rotate(180deg) saturate(0%) brightness(189%)',
        }}
      ></PricingCard>
    </div>
  );
};

const PricingCard = ({
  title = 'Advanced',
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
          className={`border-2 rounded-2xl border-gray-300/30 shadow-xl p-4 gap-4 grid ${bgColor} `}
        >
          {children}
          <div className="grid gap-1 border-b-1 border-gray-300 pb-0">
            {thirdChild && <span></span>}
            <h5 className=" font-extrabold text-2xl">{title}</h5>
            <p className="text-sm font-medium text-gray-500">{description}</p>
            <h5 className={`text-3xl mt-7 font-extrabold text-${priceColor}`}>
              ${price}/wk
            </h5>
            <div className="grid place-items-center my-5 gap-4 w-full overflow-hidden">
              <Link
                to={'/book-a-call'}
                className={`transition-all duration-200 text-white md:text-xl font-medium ${btnColor} py-3 px-16 rounded-xl`}
              >
                {btnText}
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-300 grid gap-4 pt-3 overflow-hidden ${
              isViewMore ? 'h-96' : 'h-56'
            }`}
          >
            <h5 className="text-lg font-extrabold">Features</h5>
            <ul className="grid gap-4 *:font-medium *:text-gray-600">
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                {feature1stList}
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                {feature2ndList}
              </li>
              <li className={`flex text-sm gap-2 text-${featureLockColor}`}>
                <img
                  loading="lazy"
                  src={done}
                  alt="lock meaning it will not given to client"
                  className="w-4"
                />{' '}
                Real Time Slack Communication
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                Design Services
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                Web Design
              </li>
              <li className="flex text-sm gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  className="w-4"
                />
                Illustrations
              </li>
              <li className={`flex text-sm gap-2 text-${DesignLockColor}`}>
                <img
                  loading="lazy"
                  src={done}
                  alt="lock meaning it will not given to client"
                  className="w-4"
                />
                Motion Graphics
              </li>
              <li className={`flex text-sm gap-2 text-${DesignLockColor}`}>
                <img
                  loading="lazy"
                  src={done}
                  alt="lock meaning it will not given to client"
                  className="w-4"
                />
                Video Editing
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
