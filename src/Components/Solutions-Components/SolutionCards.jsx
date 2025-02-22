import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolutionCards = () => {
  return (
    <section className="w-full max-w-7xl my-17 ">
      <div className="grid place-items-center gap-10 mx-6 md:grid-cols-3">
        <Cards />
      </div>
    </section>
  );
};

export default SolutionCards;

const Cards = () => {
  return (
    <>
      <div className="grid py-6 px-7 rounded-4xl w-full gap-15 relative border border-[#8247f5]">
        <img
          src="/images/solutionPage/solution-cards/clickup-image.svg"
          alt="this is a clickup img"
          loading="lazy"
          className="invert-25 brightness-0 w-36"
        />
        <h2 className="grid">
          <span className="text-4xl md:text-7xl text-[#8247f5]">2x</span>{' '}
          <span className="font-medium text-2xl">
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
            className="transition-all duration-200 absolute -top-25 -left-20 w-80 rotate-267"
          />
        </div>
      </div>
      <div className="grid py-6 px-7 rounded-4xl w-full gap-15 relative border border-[#8247f5]">
        <img
          src="/images/solutionPage/solution-cards/clickup-image.svg"
          alt="this is a clickup img"
          loading="lazy"
          className="invert-25 brightness-0 w-36"
        />
        <h2 className="grid">
          <span className="text-4xl md:text-7xl text-[#8247f5]">2x</span>{' '}
          <span className="font-medium text-2xl">
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
            className="transition-all duration-200 absolute -top-25 -left-20 w-80 rotate-267"
          />
        </div>
      </div>
      <div className="grid py-6 px-7 rounded-4xl w-full gap-15 relative border border-[#8247f5]">
        <img
          src="/images/solutionPage/solution-cards/clickup-image.svg"
          alt="this is a clickup img"
          loading="lazy"
          className="invert-25 brightness-0 w-36"
        />
        <h2 className="grid">
          <span className="text-4xl md:text-7xl text-[#8247f5]">2x</span>{' '}
          <span className="font-medium text-2xl">
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
            className="transition-all duration-200 absolute -top-25 -left-20 w-80 rotate-267"
          />
        </div>
      </div>
    </>
  );
};
