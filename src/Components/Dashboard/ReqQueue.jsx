import { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const ReqQueue = () => {
  const [all, setAll] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paused, setPaused] = useState(false);

  return (
    <section className="">
      <div>
        <div className="flex items-center gap-2 my-4">
          <h5 className="text-md mr-2">Status</h5>
          <button
            className={`transition-all duration-300 px-4 font-medium cursor-pointer py-1 border border-gray-300 rounded-md hover:bg-blue-200 hover:text-gray-800 ${
              all ? 'bg-blue-400 text-white' : ''
            }`}
            onClick={() => {
              setAll(true);
              setOngoing(false);
              setSubmitted(false);
              setPaused(false);
            }}
          >
            All
          </button>
          <button
            className={`transition-all duration-300 px-4 font-medium cursor-pointer py-1 border border-gray-300 rounded-md hover:bg-blue-200 hover:text-gray-800 ${
              ongoing ? 'bg-blue-400 text-white' : ''
            }`}
            onClick={() => {
              setAll(false);
              setOngoing(true);
              setSubmitted(false);
              setPaused(false);
            }}
          >
            Ongoing
          </button>
          <button
            className={`transition-all duration-300 px-4 font-medium cursor-pointer py-1 border border-gray-300 rounded-md hover:bg-blue-200 hover:text-gray-800 ${
              submitted ? 'bg-blue-400 text-white' : ''
            }`}
            onClick={() => {
              setAll(false);
              setOngoing(false);
              setSubmitted(true);
              setPaused(false);
            }}
          >
            Submitted
          </button>
          <button
            className={`transition-all duration-300 px-4 font-medium cursor-pointer py-1 border border-gray-300 rounded-md hover:bg-blue-200 hover:text-gray-800 ${
              paused ? 'bg-blue-400 text-white' : ''
            }`}
            onClick={() => {
              setAll(false);
              setOngoing(false);
              setSubmitted(false);
              setPaused(true);
            }}
          >
            Paused
          </button>
        </div>
        <div className="my-7">
          <h5 className="text-md flex justify-start items-end">
            Active
            <IoMdArrowDropright className="transition-all duration-300 text-xl rotate-90 text-blue-500" />
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ReqQueue;
