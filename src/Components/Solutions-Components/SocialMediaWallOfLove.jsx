import { FaQuoteRight } from 'react-icons/fa';

const SocialMediaWallOfLove = () => {
  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden">
      <div className="grid w-full">
        <div
          className={`flex flex-col md:mb-12 justify-center mx-3 md:mx-22 gap-2 items-center md:gap-4 md:items-start md:my-8`}
        >
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            wall of love
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 lg:text-start min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
          >
            Thousands of happy customers
          </h2>
        </div>
        <div className="bg-gray-100 p-4 mx-4 md:mx-22 md:p-15 rounded-xl md:rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="grid gap-3 text-xl font-extrabold">
              <img src="./images/walloflove/5star.svg" alt="" loading="lazy" />
              Big Fan!
            </h1>
            <div>
              <FaQuoteRight className="text-gray-300 text-4xl md:text-6xl" />
            </div>
          </div>
          {/* content */}
          <div className="grid gap-4 mt-2 text-lg md:text-xl md:mt-8">
            <p>
              I’ve tried numerous creative agencies and crowd platforms, but I
              was consistently disappointed by missed deadlines, budget
              overruns, and inconsistent engagement.
              <br />
              <br /> Many Pixels is the only company I’ve found who are customer
              focused. They offer fixed costs, and their turnaround time is
              always 1-2 days, allowing for quick reviews. Plus, they assign a
              project manager to oversee the entire process.
              <br />
              <br />I highly recommend them.
            </p>
            <h5 className="text-lg font-extrabold md:text-xl">David Bain</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaWallOfLove;
