import React from 'react';

const SolutionVideo = () => {
  return (
    <section className="w-full max-w-7xl my md:my-20">
      <div className="relative">
        <div className="grid place-items-center mx-auto gap-5">
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-7xl md:text-center md:w-4/5 md:leading-18`}
          >
            Optimize your demand gen impact
          </h2>
        </div>
        {/* content */}
        <div className="grid my-12 mx-4 md:mx-12 shadow-lg rounded-2xl border border-gray-300 overflow-hidden bg-white md:flex ">
          <div className="p-8 md:border-r md:border-gray-300 md:w-1/2">
            <h3 className="text-2xl">Connect and convert</h3>
            <p className="text-lg text-[#0b3558] mt-3">
              Outperform competitors, create more opportunities, and accelerate
              your buyer journey to drive more revenue for your organization.
            </p>
          </div>
          <div className="relative md:w-full">
            <img
              src="/images/solutionPage/solution-video/solution-video-thumbnail.webp"
              alt="solution video thumbnail"
              loading="lazy"
            />
            <div className="transition-all duration-300 absolute top-[40%] left-[45%] cursor-pointer bg-blue-600/70 md:px-10 md:py-4 hover:bg-blue-500/60">
              <img
                src="/images/solutionPage/solution-video/blue-play.png"
                alt="solution video thumbnail"
                loading="lazy"
                className="invert brightness-0 grid place-items-center mx-auto w-10 h-10 md:w-10 md:h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionVideo;
