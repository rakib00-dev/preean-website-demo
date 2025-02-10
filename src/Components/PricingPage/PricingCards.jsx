import { useState } from 'react';
import Button from '../Button';

const PricingCards = () => {
  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isThirdClicked, setIsThirdClicked] = useState(false);

  return (
    <section className="bg-white mx-auto w-full max-w-7xl ">
      <div className="py-8 px-4 mx-auto lg:py-16">
        <div className="mx-auto w-fit max-w-screen-md text-center mb-8 lg:mb-12">
          <div className="uppercase gap-2 flex justify-center items-center bg-gray-100 py-2 px-1 rounded-xl">
            <button className="uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg ">
              weekly
            </button>
            <button className=" relative uppercase font-extrabold cursor-pointer text-xs  py-2 px-4 rounded-xl md:text-lg ">
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
            <button className=" relative uppercase font-extrabold cursor-pointer text-xs  py-2 px-4 rounded-xl md:text-lg ">
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
        <PriceCards />
      </div>
    </section>
  );
};

export default PricingCards;

const PriceCards = () => {
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="md:-left-14 relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-30">
        <PricingCard
          type="Personal"
          subscription="year"
          description="Perfect for using in a personal website or a client project."
          buttonText="Choose Personal"
        ></PricingCard>
        <PricingCard
          type="Personal"
          price="$59"
          subscription="year"
          description="Perfect for using in a personal website or a client project."
          buttonText="Choose Personal"
        ></PricingCard>
        <PricingCard
          type="Business"
          price="$199"
          subscription="year"
          description="Perfect for using in a personal website or a client project."
          buttonText="Choose Business"
          active
        ></PricingCard>
        <PricingCard
          type="Professional"
          price="$256"
          subscription="year"
          description="Perfect for using in a personal website or a client project."
          buttonText="Choose Professional"
        ></PricingCard>
      </div>
    </div>
  );
};

const PricingCard = ({
  children,
  title = 'Advanced',
  price = '$439/wk',
  done = './images/ourpricingpage/card-images/done.svg',
  feature1stList = '1 Daily Output',
  feature2ndList = '1-2 Day Delivery',
  feature3rdListColor = 'gray-400',
  feature3rdListImg = './images/ourpricingpage/card-images/lock.svg',
  description = 'Create all of your everyday designs.',
  subscription,
  buttonText,
  active,
}) => {
  return (
    <>
      <div className="md:w-[330px] mx-2 left-0 ">
        {/* initial wraper */}
        <div className="border-2 rounded-2xl p-6 border-gray-300 gap-4 grid">
          <div className="grid gap-4 border-b-1 border-gray-300 pb-8">
            <h5 className="text-2xl font-extrabold ">{title}</h5>
            <p className="text-lg">{description}</p>
            <h5 className="text-[27px] mt-2 font-extrabold text-blue-500">
              USD {price}
            </h5>
          </div>
          <div className="grid gap-4 pt-3">
            <h5 className="text-2xl font-extrabold ">Features</h5>
            <ul className="grid gap-4">
              <li className="flex text-xl gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                />
                {feature1stList}
              </li>
              <li className="flex text-xl gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                />
                {feature2ndList}
              </li>
              <li className={`flex text-xl gap-2 text-${feature3rdListColor}`}>
                <img
                  loading="lazy"
                  src={feature3rdListImg}
                  alt="lock meaning it will not given to client"
                />
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <h5 className="text-2xl font-extrabold ">Design Services</h5>
            <ul className="grid gap-4">
              <li className="flex text-xl gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                />
                Design Services
              </li>
              <li className="flex text-xl gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                />
                Web Design
              </li>
              <li className="flex text-xl gap-2">
                <img
                  loading="lazy"
                  src={done}
                  alt="done meaning it will given to client"
                />
                Illustrations
              </li>
              <li className="flex text-xl gap-2">
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/lock.svg"
                  alt="lock meaning it will not given to client"
                />
                Motion Graphics
              </li>
              <li className="flex text-xl gap-2">
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/lock.svg"
                  alt="lock meaning it will not given to client"
                />
                Video Editing
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <h5 className="text-2xl font-extrabold ">Tools</h5>
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
              <Button className={'text-white md:text-2xl'} px="60">
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
