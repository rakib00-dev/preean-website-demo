import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';

const ReqQueue = () => {
  const [all, setAll] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paused, setPaused] = useState(false);

  const [activeQueue, setActiveQueue] = useState([
    {
      task: 'Adapt slides presentation',
      category: 'Corporate Design',
      task_id: '#853281',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Ongoing',
    },
    {
      task: 'BallBoost Logo',
      category: 'Brand Identity Design',
      task_id: '#33448',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Ongoing',
    },
    {
      task: 'SportBoost',
      category: 'Brand Identity Design',
      task_id: '#34696',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Ongoing',
    },
    {
      task: 'Komo Glasses Shooting',
      category: 'Digital Design',
      task_id: '#28435',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Ongoing',
    },
  ]);

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
          {activeQueue.map((e, i) => (
            <div key={i} className="flex gap-4 items-center ">
              <span className=" relative text-white bg-blue-50 px-4 py-2 ">
                <span className="relative stroke-orange-500 font-bold z-10">
                  {i + 1}
                </span>
                <div className="bg-gradient-to-r absolute inset-0 from-[#CF77F3] via-[#009BFF] to-[#2AC9DB] rounded-full blur-[5px] p-3"></div>
                {/* <div className="bg-gradient-to-r absolute left-0 top-0 from-[#CF77F3] via-[#009BFF] to-[#2AC9DB] rounded-full blur-[5px] w-full h-full"></div> */}
              </span>

              <div className="flex justify-between w-full bg-gray-100 py-2 px-4 rounded-xl">
                <div>
                  <h5>{e.task}</h5>
                  <p>
                    <span className="pr-2 border-r-2 border-gray-200">
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
                  <div className="transition-all text-center duration-300 px-4 font-medium cursor-pointer py-1 border border-gray-300 bg-blue-400 text-white rounded-full">
                    <p>{e.status}</p>
                  </div>
                  <div className="flex justify-center items-center py-4 px-2 cursor-pointer">
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
