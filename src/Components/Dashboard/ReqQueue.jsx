import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';
import { useOutletContext } from 'react-router-dom';

const ReqQueue = () => {
  const [all, setAll] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paused, setPaused] = useState(false);

  const ReqQueues = useOutletContext();

  const activeQueueLists = ReqQueues.filter((list) => {
    if (all) {
      return (
        list.status === 'Paused' ||
        list.status === 'Ongoing' ||
        list.status === 'Submitted'
      );
    }
    if (ongoing) {
      return list.status === 'Ongoing';
    }
    if (submitted) {
      return list.status === 'Submitted';
    }
    if (paused) {
      return list.status === 'Paused';
    }
  });
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
        <div className="grid gap-4">
          {activeQueueLists.map((e, i) => (
            <div key={i} className="flex gap-4 items-center ">
              <span className=" relative text-white bg-blue-50 px-4 py-2 ">
                <span
                  className="relative font-bold z-10 shadow-xl"
                  style={{ WebkitTextStroke: '.2px #0b3558c3' }}
                >
                  {i + 1}
                </span>
                <div className="bg-gradient-to-r absolute inset-0 from-[#CF77F3] via-[#009BFF] to-[#2AC9DB] rounded-full blur-[5px] p-3"></div>
                {/* <div className="bg-gradient-to-r absolute left-0 top-0 from-[#CF77F3] via-[#009BFF] to-[#2AC9DB] rounded-full blur-[5px] w-full h-full"></div> */}
              </span>

              <div className="flex justify-between w-full bg-gray-100 py-2 px-4 rounded-xl">
                <div>
                  <h5>{e.task}</h5>
                  <p>
                    <span className="pr-2 text-gray-500 font-medium border-r-2 border-gray-200">
                      {e.category}
                    </span>{' '}
                    <span className="pl-2 text-blue-500">{e.task_id}</span>
                  </p>
                </div>

                <div className="flex items-center gap-20">
                  <div>
                    <p className="text-gray-500 font-medium">Last Updated</p>
                    <span>{e.last_updated}</span>
                  </div>
                  <div
                    className={`transition-all text-center duration-300 px-4 font-medium py-1 border border-gray-300 rounded-full w-30 ${
                      e.status == 'Ongoing'
                        ? 'bg-blue-100 text-blue-500'
                        : e.status == 'Submitted'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    <p>{e.status}</p>
                  </div>
                  <div className="flex justify-center items-center py-4 px-4 cursor-pointer rounded-full hover:bg-gray-200">
                    <BsThreeDots />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReqQueue;
