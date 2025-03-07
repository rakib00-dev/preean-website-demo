import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';

const ReqDelivered = () => {
  const [deliveredQueue, setDeliveredQueue] = useState([
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
      status: 'Submitted',
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
    {
      task: 'TechFlow Landing Page',
      category: 'Web Design',
      task_id: '#98321',
      status: 'Delivered',
      last_updated: '23 Feb, 11:20 AM',
    },
    {
      task: 'CreativeStudio Logo',
      category: 'Graphic Design',
      task_id: '#47203',
      status: 'Delivered',
      last_updated: '20 Feb, 15:45 PM',
    },
    {
      task: 'SmartFit App Prototype',
      category: 'App Design',
      task_id: '#15027',
      status: 'Delivered',
      last_updated: '18 Feb, 09:30 AM',
    },
    {
      task: 'NovaTech Website Redesign',
      category: 'Web Design',
      task_id: '#51234',
      status: 'Paused',
      last_updated: '02 Mar, 10:30 AM',
    },
    {
      task: 'PixelPro App UI/UX',
      category: 'App Design',
      task_id: '#42987',
      status: 'Ongoing',
      last_updated: '01 Mar, 14:45 PM',
    },
    {
      task: 'EliteFit Branding',
      category: 'Brand Identity Design',
      task_id: '#37812',
      status: 'Paused',
      last_updated: '28 Feb, 09:15 AM',
    },
    {
      task: 'CyberSecure Logo',
      category: 'Graphic Design',
      task_id: '#29104',
      status: 'Ongoing',
      last_updated: '27 Feb, 17:00 PM',
    },
    {
      task: 'Vortex Ad Campaign',
      category: 'Digital Marketing',
      task_id: '#17389',
      status: 'Submitted',
      last_updated: '25 Feb, 12:20 PM',
    },
  ]);

  const deliveredList = deliveredQueue.filter(
    (list) => list.status === 'Delivered'
  );
  console.log(deliveredList);

  return (
    <section className="">
      <div>
        <div className="my-7">
          <h5 className="text-md flex justify-start items-end">
            Active
            <IoMdArrowDropright className="transition-all duration-300 text-xl rotate-90 text-blue-500" />
          </h5>
        </div>
        <div className="grid gap-4">
          {deliveredList.map((e, i) => (
            <div key={i} className="flex gap-4 items-center ">
              <span className=" relative text-white bg-blue-50 px-4 py-2 ">
                <span
                  className="relative font-bold z-10 shadow-xl"
                  style={{ '-webkit-text-stroke': '.2px #0b3558c3' }}
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
                    className={`transition-all text-center duration-300 px-4 font-medium py-1 border border-gray-300 rounded-full w-30 ${'bg-green-100 text-green-500'}`}
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

export default ReqDelivered;
