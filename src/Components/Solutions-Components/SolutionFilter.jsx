import { useState } from 'react';
import SoluCommonCard from './SoluCommonCard';

const SolutionFilter = () => {
  const [isFirstActive, setIsFirstActive] = useState(true);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);
  const [isFourthActive, setIsFourthActive] = useState(false);
  const [isFifthActive, setIsFifthActive] = useState(false);

  return (
    <section className="w-full max-w-7xl md:my-20 overflow-hidden">
      <div className="relative py-10 md:py-30">
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Easy work process
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-13`}
          >
            DesignPro's features for clients
          </h2>
        </div>
        <ul className="flex relative mt-12 ml-4 px-3 justify-center text-sm md:text-2xl font-medium w-full overflow-x-scroll md:overflow-auto">
          <li
            className={`transition-all duration-300 cursor-pointer py-3 px-6 border-b-3 border-gray-200 hover:bg-blue-50 ${
              isFirstActive
                ? 'border-b-blue-300 '
                : 'text-[#0b3558] hover:text-[#000]'
            }`}
            style={{ color: isFirstActive ? '#006bff' : '' }}
            onClick={() => {
              setIsFirstActive(true);
              setIsSecondActive(false);
              setIsThirdActive(false);
              setIsFourthActive(false);
              setIsFifthActive(false);
            }}
          >
            Build Website
          </li>
          <li
            className={`transition-all duration-300 cursor-pointer py-3 px-6 border-b-3 border-gray-200 hover:bg-blue-50 ${
              isSecondActive
                ? 'border-b-blue-300 '
                : 'text-[#0b3558] hover:text-[#000]'
            }`}
            style={{ color: isSecondActive ? '#006bff' : '' }}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(true);
              setIsThirdActive(false);
              setIsFourthActive(false);
              setIsFifthActive(false);
            }}
          >
            Thumbnail Design
          </li>
          <li
            className={`transition-all duration-300 cursor-pointer py-3 px-6 border-b-3 border-gray-200 hover:bg-blue-50 ${
              isThirdActive
                ? 'border-b-blue-300 '
                : 'text-[#0b3558] hover:text-[#000]'
            }`}
            style={{ color: isThirdActive ? '#006bff' : '' }}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(false);
              setIsThirdActive(true);
              setIsFourthActive(false);
              setIsFifthActive(false);
            }}
          >
            Lead Generation
          </li>
          <li
            className={`transition-all duration-300 cursor-pointer py-3 px-6 border-b-3 border-gray-200 hover:bg-blue-50 ${
              isFourthActive
                ? 'border-b-blue-300 '
                : 'text-[#0b3558] hover:text-[#000]'
            }`}
            style={{ color: isFourthActive ? '#006bff' : '' }}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(false);
              setIsThirdActive(false);
              setIsFourthActive(true);
              setIsFifthActive(false);
            }}
          >
            Social Media
          </li>
          <li
            className={`transition-all duration-300 cursor-pointer py-3 px-6 border-b-3 border-gray-200 hover:bg-blue-50 ${
              isFifthActive
                ? 'border-b-blue-300 '
                : 'text-[#0b3558] hover:text-[#000]'
            }`}
            style={{ color: isFifthActive ? '#006bff' : '' }}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(false);
              setIsThirdActive(false);
              setIsFourthActive(false);
              setIsFifthActive(true);
            }}
          >
            Canva Design
          </li>
        </ul>
        <div className="w-full">
          {isFirstActive ? (
            <FirstCard />
          ) : isSecondActive ? (
            <SecondCard />
          ) : isThirdActive ? (
            <ThirdCard />
          ) : isFourthActive ? (
            <FourthCard />
          ) : (
            <FifthCard />
          )}
        </div>
      </div>
    </section>
  );
};

export default SolutionFilter;

const FirstCard = () => {
  return (
    <SoluCommonCard
      bigTitle="Drive prospect action"
      para="Add a booking page on your website and landing pages so prospects can reach you as soon as you have their attention."
      imgSrc="/images/solutionPage/graphic-design/filter/filter1.png"
      linkText="Learn more"
    />
  );
};
const SecondCard = () => {
  return (
    <SoluCommonCard
      bigTitle="Connect with high-value leads"
      para="Book qualified buyers at live events or from your website — directly from HubSpot, Marketo, Pardot and Calendly forms. Use existing qualification criteria and match known accounts to account owners."
      imgSrc="/images/solutionPage/graphic-design/filter/filter2.png"
      linkText="Learn more"
    />
  );
};
const ThirdCard = () => {
  return (
    <SoluCommonCard
      bigTitle="Integrate with Salesforce and other CRMs"
      para="Eliminate manual data entry by automatically syncing Calendly with your CRM to update leads, contacts, and opportunities in real-time. Book meetings directly from CRM records."
      imgSrc="/images/solutionPage/graphic-design/filter/filter3.png"
      linkText="Learn more"
    />
  );
};
const FourthCard = () => {
  return (
    <SoluCommonCard
      bigTitle="Integrate with your marketing tech stack"
      para="Integrate with your marketing automation platform for immediate campaign reporting and a seamless prospect experience."
      imgSrc="/images/solutionPage/graphic-design/filter/filter4.png"
      linkText="Learn more"
    />
  );
};
const FifthCard = () => {
  return (
    <SoluCommonCard
      bigTitle="Build your best experience"
      para="Create a scalable meeting template to use for campaigns and lead routing to make your job easier."
      imgSrc="/images/solutionPage/graphic-design/filter/filter5.png"
      linkText="Learn more"
    />
  );
};
