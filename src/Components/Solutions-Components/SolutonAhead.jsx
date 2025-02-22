import { IoIosArrowRoundForward, IoMdArrowForward } from 'react-icons/io';

const SolutonAhead = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid gap-5 px-4 md:px-11 pt-16 pb-8 md:grid-cols-2 md:gap-0">
        <div className="grid gap-6 md:gap-0">
          <h1 className="text-5xl">
            Easy <span className="text-blue-600">ahead</span>™
          </h1>
          <p className="text-gray-500 text-lg md:w-4/5">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
        </div>
        <div className="grid gap-4 p-8 rounded-xl shadow-xl border border-gray-200 bg-white cursor-pointer group">
          <div className="flex justify-between items-center ">
            <p className="text-sm uppercase font-medium w-fit text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
              featured
            </p>
            <IoMdArrowForward className="transition-all duration-200 relative text-3xl font-light top-0 right-0 rotate-317 group-hover:-top-2 group-hover:-right-2" />
          </div>
          <h3 className="text-2xl" style={{ fontWeight: '500' }}>
            2024 Report: The State of Meetings
          </h3>
          <p className="text-xl text-[#0b3558c1]">
            See the latest data on meeting culture and productivity
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutonAhead;
