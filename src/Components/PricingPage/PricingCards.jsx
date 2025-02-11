import { useState } from 'react';
import Button from '../Button';

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
      <section className="mx-auto w-full max-w-7xl">
        <div className="bg-purple-600 grid place-items-center mx-2 md:mx-20 w-fit  rounded-xl">
          <div className="grid justify-center items-center w-auto gap-2 p-6 py-10 h-auto place-items-center md:grid-cols-3">
            {/* cards */}
            <div className="flex flex-col gap-2 md:gap-5 w-full ">
              <h5 className="py-2 px-4 w-fit rounded-full text-sm font-extrabold uppercase  bg-red-400 text-white">
                Add-on
              </h5>
              <h3 className="w-fit font-extrabold text-2xl text-white md:text-3xl">
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
                <h5 className="text-lg font-extrabold text-white">
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
              <a href="">
                <button
                  className={
                    'py-2 px-6 rounded-md font-extrabold text-black text-lg bg-amber-300 hover:bg-amber-100 cursor-pointer'
                  }
                >
                  Book A Call
                </button>
              </a>
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
    <div className=" relative grid grid-cols-1 md:grid-cols-3 gap-5 2xl:grid-cols-4 2xl:gap-30">
      <PricingCard
        price={firstPrice}
        subscription="year"
        description="Create all of your everyday designs."
        buttonText="Choose Personal"
      ></PricingCard>
      <PricingCard
        title="Business"
        description="Get double the output everyday."
        price={secondPrice}
        feature1stList="2 Daily Output"
        feature2ndList="Next-Day Delivery"
        DesignLockImg="./images/ourpricingpage/card-images/done.svg"
        DesignLockColor="black"
      ></PricingCard>
      <PricingCard
        title="Designated Designer"
        description="Collaborate in real time with your designer."
        price={thirdPrice}
        feature1stList="1 Designated Designer"
        feature2stList="Same-Day Delivery"
        bgColor="bg-[#ffa500]"
        btnColor="black"
        priceColor="black text-extrabold"
        featurLockImg="./images/ourpricingpage/card-images/done.svg"
        DesignLockImg="./images/ourpricingpage/card-images/done.svg"
        featureLockColor="black"
        DesignLockColor="black"
        doneImgStyle={{
          filter: 'hue-rotate(180deg) saturate(0%) brightness(189%)',
        }}
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
        description="Collaborate in real time with your designer."
        price={fourthPrice}
        bgColor="bg-[#ffa500]"
        btnColor="black"
        priceColor="black text-extrabold"
        feature1stList="2 Designated Designer"
        feature2stList="Same-Day Delivery"
        featurLockImg="./images/ourpricingpage/card-images/done.svg"
        DesignLockImg="./images/ourpricingpage/card-images/done.svg"
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
  featurLockImg = './images/ourpricingpage/card-images/lock.svg',
  DesignLockImg = './images/ourpricingpage/card-images/lock.svg',
  bgColor = 'bg-white',
  priceColor = 'blue-500',
  doneImgStyle,
  btnColor,
  children,
}) => {
  return (
    <>
      <div className={`md:w-[330px]  mx-2 left-0 relative`}>
        {/* initial wraper */}
        <div
          className={`border-2 rounded-2xl border-gray-300 p-4 gap-4 grid ${bgColor} `}
        >
          {children}
          <div className="grid gap-4 border-b-1 border-gray-300 pb-5">
            <h5 className="text-xl font-extrabold ">{title}</h5>
            <p className="text-lg">{description}</p>
            <h5 className={`text-xl mt-2 font-extrabold text-${priceColor}`}>
              USD ${price}/wk
            </h5>
          </div>
          <div className="grid gap-4 pt-3">
            <h5 className="text-xl font-extrabold ">Features</h5>
            <ul className="grid gap-4">
              <li className="flex text-md gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  style={doneImgStyle}
                />
                {feature1stList}
              </li>
              <li className="flex text-md gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  style={doneImgStyle}
                />
                {feature2ndList}
              </li>
              <li className={`flex text-md gap-2 text-${featureLockColor}`}>
                <img
                  loading="lazy"
                  src={featurLockImg}
                  alt="lock meaning it will not given to client"
                  style={doneImgStyle}
                />{' '}
                Real Time Slack Communication
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <h5 className="text-xl font-extrabold ">Design Services</h5>
            <ul className="grid gap-4">
              <li className="flex text-md gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  style={doneImgStyle}
                />
                Design Services
              </li>
              <li className="flex text-md gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  style={doneImgStyle}
                />
                Web Design
              </li>
              <li className="flex text-md gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                  style={doneImgStyle}
                />
                Illustrations
              </li>
              <li className={`flex text-md gap-2 text-${DesignLockColor}`}>
                <img
                  loading="lazy"
                  src={DesignLockImg}
                  alt="lock meaning it will not given to client"
                  style={doneImgStyle}
                />
                Motion Graphics
              </li>
              <li className={`flex text-md gap-2 text-${DesignLockColor}`}>
                <img
                  loading="lazy"
                  src={DesignLockImg}
                  alt="lock meaning it will not given to client"
                  style={doneImgStyle}
                />
                Video Editing
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
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
          </div>
          <div className="grid place-items-center my-5 gap-4">
            <a href="">
              <Button
                className={'text-white md:text-xl bg-black'}
                px="60"
                bg={btnColor}
              >
                Get Started
              </Button>
            </a>
          </div>
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
