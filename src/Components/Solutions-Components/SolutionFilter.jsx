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
  return <SoluCommonCard />;
};
const SecondCard = () => {
  return <SoluCommonCard />;
};
const ThirdCard = () => {
  return <SoluCommonCard />;
};
const FourthCard = () => {
  return <SoluCommonCard />;
};
const FifthCard = () => {
  return <SoluCommonCard />;
};
