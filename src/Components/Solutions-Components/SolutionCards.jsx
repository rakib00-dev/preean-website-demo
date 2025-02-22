import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolutionCards = () => {
  return (
    <section className="w-full max-w-7xl my-17 ">
      <div className="grid place-items-center gap-3 md:gap-0 mx-3 md:mx-10 md:grid-cols-3">
        <Cards />
      </div>
    </section>
  );
};

export default SolutionCards;

const Cards = () => {
  return (
    <>
      <div className="grid py-6 px-7 rounded-4xl w-full md:w-[378px] h-[404px] gap-19 relative border border-[#8247f5] overflow-hidden cursor-pointer group">
        <img
          src="/images/solutionPage/solution-cards/clickup-image.svg"
          alt="this is a clickup img"
          loading="lazy"
          className="transition-all duration-300 invert-25 brightness-0 saturate-0 w-36 relative group-hover:invert-100"
          style={{ zIndex: 1 }}
        />
        <h2 className="grid relative" style={{ zIndex: 1 }}>
          <span className="transition-all duration-300 text-4xl md:text-7xl text-[#8247f5] group-hover:text-white">
            2x
          </span>{' '}
          <span className="transition-all duration-300 font-medium text-2xl group-hover:text-white">
            Increase in customer engagement
          </span>
        </h2>
        <div className="relative">
          <Link
            className="relative flex justify-start gap-2 text-white items-center"
            style={{ zIndex: 1 }}
          >
            Read More <FaArrowRight />
          </Link>
          <img
            src="/images/solutionPage/solution-cards/card-shape-1.svg"
            alt="card svg shape"
            loading="lazy"
            className="transition-all duration-400 absolute -top-30 md:-top-25 -left-20 w-80 h-80 rotate-40 md:rotate-267 scale-125 md:scale-100 group-hover:scale-[10]"
          />
        </div>
      </div>
      <div className="grid py-6 px-7 rounded-4xl w-full md:w-[378px] h-[404px] gap-19 relative border border-[#14aa51] overflow-hidden cursor-pointer group">
        <img
          src="/images/solutionPage/solution-cards/katalon-image.svg"
          alt="this is a clickup img"
          loading="lazy"
          className="transition-all duration-300 invert-25 brightness-0 saturate-0 w-36 relative group-hover:invert-100"
          style={{ zIndex: 1 }}
        />
        <h2 className="grid relative" style={{ zIndex: 1 }}>
          <span className="transition-all duration-300 text-4xl md:text-7xl text-[#14aa51] group-hover:text-white">
            2-3x
          </span>{' '}
          <span className="transition-all duration-300 font-medium text-2xl group-hover:text-white">
            Higher lead conversion rates
          </span>
        </h2>
        <div className="relative">
          <Link
            className="relative flex justify-start gap-2 text-white items-center"
            style={{ zIndex: 1 }}
          >
            Read More <FaArrowRight />
          </Link>
          <img
            src="/images/solutionPage/solution-cards/card-shape-2.svg"
            alt="card svg shape"
            loading="lazy"
            className="transition-all duration-400 absolute -top-48 -left-20 md:-top-44 md:-left-40 w-96 h-96 rotate-254 scale-150 md:scale-125  group-hover:scale-[10]"
          />
        </div>
      </div>
      <div className="grid py-6 px-7 rounded-4xl w-full md:w-[378px] h-[404px] gap-19 relative border border-[#ff0066] overflow-hidden cursor-pointer group">
        <img
          src="/images/solutionPage/solution-cards/smith-image.svg"
          alt="this is a clickup img"
          loading="lazy"
          className="transition-all duration-300 invert-25 brightness-0 saturate-0 w-36 relative group-hover:invert-100"
          style={{ zIndex: 1 }}
        />
        <h2 className="grid relative" style={{ zIndex: 1 }}>
          <span className="transition-all duration-300 text-4xl md:text-7xl text-[#ff0066] group-hover:text-white">
            26%
          </span>{' '}
          <span className="transition-all duration-300 font-medium text-2xl group-hover:text-white">
            Increase website bookings
          </span>
        </h2>
        <div className="relative">
          <Link
            className="relative flex justify-start gap-2 text-white items-center"
            style={{ zIndex: 1 }}
          >
            Read More <FaArrowRight />
          </Link>
          <img
            src="/images/solutionPage/solution-cards/card-shape-3.svg"
            alt="card svg shape"
            loading="lazy"
            className="transition-all duration-400 absolute -top-30 -left-18 md:-top-28 md:-left-30 w-80 h-80 rotate-10 scale-125 md:scale-100 group-hover:scale-[10]"
          />
        </div>
      </div>
    </>
  );
};
