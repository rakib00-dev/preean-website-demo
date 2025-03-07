import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link, Outlet } from 'react-router-dom';

const dashboradRequests = () => {
  const [isQue, setIsQue] = useState(true);
  const [isDeli, setIsDeli] = useState(false);

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
      task: 'NovaTech Website Redesign',
      category: 'Web Design',
      task_id: '#51234',
      status: 'Paused',
      last_updated: '02 Mar, 10:30 AM',
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

  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">Requests</h1>
          <div className="flex items-center gap-2">
            <div className="flex justify-center gap-1 items-center bg-gray-50 roudned shadow-md border px-2 border-gray-200 py-1.5">
              <HiOutlineMagnifyingGlass
                className="text-[#48c8ff] font-extrabold"
                stroke="blue"
              />
              <input
                type="search"
                placeholder="Search"
                className="pl-3 pr-4 outline-none placeholder:text-gray-400 w-60"
              />
            </div>
            <Link
              to={'/dashboard/create-request'}
              className="flex text-md bg-blue-500 font-medium items-center justify-center text-white py-1 px-2 gap-1 transition-all duration-300 hover:bg-blue-400 cursor-pointer"
            >
              <GoPlus className="text-xl" /> Create Request
            </Link>
          </div>
        </div>
        <div className="flex gap-4 w-full border-b-2 border-gray-200 mt-8">
          <Link
            to={'/dashboard/req'}
            className={
              isQue
                ? 'transition-all duration-300 font-bold border-b-2 border-blue-500 text-blue-400'
                : 'transition-all duration-300 font-bold border-b-2 border-transparent text-black'
            }
            onClick={() => {
              setIsQue(true);
              setIsDeli(false);
            }}
          >
            Queue
          </Link>
          <Link
            to={'/dashboard/req/delivered'}
            className={
              isDeli
                ? 'transition-all duration-300 font-bold border-b-2 border-blue-500 text-blue-400'
                : 'transition-all duration-300 font-bold border-b-2 border-transparent text-black'
            }
            onClick={() => {
              setIsDeli(true);
              setIsQue(false);
            }}
          >
            Delivered
          </Link>
        </div>
        <div>
          <Outlet context={activeQueue} />
        </div>
      </div>
    </section>
  );
};

export default dashboradRequests;
