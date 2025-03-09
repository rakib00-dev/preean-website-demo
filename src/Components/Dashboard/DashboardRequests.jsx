import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';
import { LuTicket } from 'react-icons/lu';
import { Link, Outlet, useOutletContext } from 'react-router-dom';

const dashboradRequests = () => {
  const [isQue, setIsQue] = useState(true);
  const [isDeli, setIsDeli] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleReqSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const reciveReqQueues = useOutletContext();

  // const ReqQueues = activeQueue;
  const ReqQueues = reciveReqQueues.filter((list) =>
    list.task.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(searchValue);

  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="flex items-center gap-2 text-4xl">
            <LuTicket /> Requests
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex justify-center gap-1 items-center bg-gray-50 roudned shadow-md border px-2 border-gray-200 py-1.5">
              <HiOutlineMagnifyingGlass
                className="text-[#48c8ff] font-extrabold"
                stroke="green"
              />
              <input
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => handleReqSearch(e)}
                className="pl-3 pr-4 outline-none placeholder:text-gray-400 w-60"
              />
            </div>
            <Link
              to={'/dashboard/create-request'}
              className="flex text-md bg-green-500 font-medium items-center justify-center text-white py-1 px-2 gap-1 transition-all duration-300 hover:bg-green-400 cursor-pointer"
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
                ? 'transition-all duration-300 font-bold border-b-2 border-green-500 text-green-400'
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
                ? 'transition-all duration-300 font-bold border-b-2 border-green-500 text-green-400'
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
          <Outlet context={ReqQueues} />
        </div>
      </div>
    </section>
  );
};

export default dashboradRequests;
