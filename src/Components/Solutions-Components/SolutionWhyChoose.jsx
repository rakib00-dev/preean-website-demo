import React from 'react';
import SoluCommonCard from './SoluCommonCard';

const SolutionWhyChoose = () => {
  return (
    <section className="w-full max-w-7xl my md:my-40">
      <div className="relative">
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Why DesignPro
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-13`}
          >
            Move marketing initiatives forward, faster with easy scheduling
          </h2>
        </div>
        <div>
          <SoluCommonCard />
        </div>
      </div>
    </section>
  );
};

export default SolutionWhyChoose;
